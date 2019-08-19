import React, { Component } from 'react';
import axios from 'axios';

import { isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';
import redirect from '../../../src/lib/redirect';

export default class Create extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }

    state = {
        schemas: [],
        name: '',
        schemaId: null,
        date: null,
        error: '',
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: '/schema/get',
        }).then(({ data }) => {
            this.setState({ schemas: data });
        });
        //todo handle error
    }

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = async ev => {
        const { name, date, schemaId } = this.state;

        ev.preventDefault();

        try {
            if (!name.length || !date || !schemaId) {
                throw new Error('Please fill out all of the fields');
            }

            const res = await axios({
                method: 'post',
                url: '/events/create',
                data: {
                    name,
                    date,
                    schemaId,
                },
            });

            if (res) {
                redirect('/manager/events');
            }
        } catch (e) {
            this.setState({ error: e.message });
        }
    };

    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Create New Event</h2>
                {this.state.error}
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Event Name"
                        onChange={this.handleChange}
                    />
                    <input
                        name="date"
                        type="date"
                        onChange={this.handleChange}
                    />
                    <select name="schemaId" onChange={this.handleChange}>
                        <option>Select Schema</option>
                        {this.state.schemas.map(schema => {
                            return (
                                <option value={schema.id} key={schema.id}>
                                    {schema.name}
                                </option>
                            );
                        })}
                    </select>
                    <input type="submit" value="Create Event" />
                </form>
            </ManagerContainer>
        );
    }
}
