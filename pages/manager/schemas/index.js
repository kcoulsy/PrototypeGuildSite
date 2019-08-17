import React, { Component } from 'react';
import Link from 'next/link';
import { redirectIfNotAuthenticated, isAuthenticated } from '../../../lib/auth';

import ManagerContainer from '../../../containers/ManagerContainer';

export default class Index extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Schemas</h2>
                <Link href="/manager/schemas/create"><a><button>Create New</button></a></Link>
            </ManagerContainer>
        );
    }
}
