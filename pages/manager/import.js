import React, { Component } from 'react';
import { redirectIfNotAuthenticated } from '../../lib/auth';

import ManagerContainer from '../../containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {};
    }
    render() {
        return <ManagerContainer><h2>Importer</h2></ManagerContainer>;
    }
}
