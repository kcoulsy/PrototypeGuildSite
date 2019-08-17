import React, { Component } from 'react';
import { redirectIfNotAuthenticated, getJwt } from '../../lib/auth';

export default class Profile extends Component {
    static getInitialProps(ctx) {
        if (redirectIfNotAuthenticated(ctx)) {
            return {};
        }
        const jwt = getJwt(ctx);
        return {
            authenticated: jwt,
        };
    }
    render() {
        return (
            <div>
                profile {this.props.authenticated}
            </div>
        );
    }
}
