import React, { Component } from 'react';
import { register, redirectIfAuthenticated } from '../../lib/auth';

export default class Register extends Component {
    static getInitialProps(ctx) {
        redirectIfAuthenticated(ctx);
    }
    render() {
        return <div>register</div>;
    }
}
