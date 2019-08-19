import React, { Component } from 'react';
import Link from 'next/link';

import { isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Events</h2>
                <Link href="/manager/events/create">
                <a>
                    <button>Create New</button>
                </a>
            </Link>
            </ManagerContainer>
        );
    }
}
