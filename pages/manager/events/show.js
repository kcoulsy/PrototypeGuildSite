import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactTable from 'react-table';

import { isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';
import Attendance from './../../../src/components/Manager/Attendance';
import Assignments from '../../../src/components/Manager/Assignments';

export default class Show extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
            id: ctx.query.id,
        };
    }

    state = {
        players: [],
        event: {},
        attendance: {},
    };

    componentDidMount = async () => {
        const { data } = await axios({
            method: 'get',
            url: `/events/${this.props.id}`,
            params: {
                players: true,
                schema: true,
                attendance: true,
            },
        });
        if (data) {
            const attendance = data.event.Attendances.reduce((acc, curr) => {
                // if (curr.)
                acc[curr.playerId] = curr;
                return acc;
            }, {});
            this.setState({
                ...data,
                attendance,
            });
        }
    };

    setGoing = async data => {
        const response = await axios({
            method: 'post',
            url: '/attendance',
            data: {
                ...data,
                eventId: this.props.id,
            },
        });

        this.setState(prevState => {
            const attendance = {
                ...prevState.attendance,
            };

            attendance[data.playerId] = response.data.attendance

            return {
                attendance
            };
        });
    };

    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Event</h2>
                <Attendance {...this.state} setGoing={this.setGoing} />
                {this.state.event.Schema && this.state.event.Schema ? (
                    <Assignments
                        schema={JSON.parse(this.state.event.Schema.schema)}
                        attendance={this.state.attendance}
                    />
                ) : (
                    ''
                )}
            </ManagerContainer>
        );
    }
}
