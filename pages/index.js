import React from 'react';

import Head from '../components/head';
import Navbar from '../components/Navbar';
import Recruitment from '../components/Recruitment';
import RaidProgress from '../components/RaidProgress';
import AboutUs from '../components/AboutUs';
import '../styles/index.scss';

export default () => (
    <div className="page-index">
        <Head />
        <Navbar />
        <div className="content">
            <div className="proto-hero">
                <img src="/static/images/logo.png" alt="Prototype Guild Logo" />
                <h2>A Classic WoW guild</h2>
            </div>
            <Recruitment />
            <RaidProgress />
            <AboutUs />
        </div>
    </div>
);
