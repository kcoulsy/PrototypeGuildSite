import React, { Component } from 'react';
import { isAuthenticated } from '../../lib/auth';

import ManagerContainer from '../../containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Users</h2>
            </ManagerContainer>
        );
    }
}
