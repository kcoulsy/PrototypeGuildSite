import React, { Component } from 'react';
import { logout } from '../../lib/auth';

export default class Logout extends Component {
    componentDidMount() {
        // Session is ended
        logout();
        return {};
    }
    render() {
        return null;
    }
}
