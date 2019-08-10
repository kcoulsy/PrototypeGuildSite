import React, { Fragment } from 'react';

import Head from '../components/head';
import Navbar from '../components/Navbar';
import '../styles/index.scss';

export default () => (
    <Fragment>
        <Head />
        <Navbar />
        <div className="content">
            <div className="proto-hero">
                <img src="/static/images/logo.png" alt="Prototype Guild Logo" />
                <h2>A Classic WoW guild</h2>
            </div>
        </div>
    </Fragment>
);
