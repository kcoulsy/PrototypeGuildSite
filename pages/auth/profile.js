import React, { Component } from 'react';
import { redirectIfNotAuthenticated, getJwt } from '../../lib/auth';
import redirect from '../../lib/redirect';

export default class Profile extends Component {
    static getInitialProps(ctx) {
        if (redirectIfNotAuthenticated(ctx)) {
            return {};
        }
        redirect('/manager/users', ctx);
        return {};
    }
    render() {
        return null;
    }
}
