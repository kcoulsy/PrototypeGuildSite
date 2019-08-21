import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactTable from 'react-table';

import { isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';
import Attendace from './../../../src/components/Manager/Attendance';

export default class Show extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }

    state = {};

    componentDidMount = async () => {
        // const { data } = await axios({
        //     method: 'get',
        //     url: `/events`,
        // });
        // if (data) {
        //     this.setState({
        //         events: data.events,
        //     });
        // }
    };

    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Event</h2>
                <Attendace players={[]} />
            </ManagerContainer>
        );
    }
}
