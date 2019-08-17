import React, { Component } from 'react';
import { redirectIfNotAuthenticated } from '../../lib/auth';

export default class Import extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {};
    }
    render() {
        return <div>Importer</div>;
    }
}
