import React, { Component } from 'react';
import { redirectIfNotAuthenticated, isAuthenticated } from '../../lib/auth';

import ManagerContainer from '../../containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Importer</h2>
            </ManagerContainer>
        );
    }
}
