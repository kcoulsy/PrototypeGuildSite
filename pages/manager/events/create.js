import React, { Component } from 'react';
import axios from 'axios';

import { isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';

export default class Create extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    state = {
        schemas: [],
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
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Create New Event</h2>
                <form>
                    <input type="text" placeholder="Event Name" />
                    <input type="date" />
                    <select>
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
