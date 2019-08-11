import React, { Component } from 'react';

import Head from '../components/head';
import Navbar from '../components/Navbar';
import Recruitment from '../components/Recruitment';
import RaidProgress from '../components/RaidProgress';
import AboutUs from '../components/AboutUs';

export default class Index extends Component {
    static getInitialProps({ query }) {
        return query;
    }

    render() {
        const { recruitment, progress } = this.props;

        return (
            <div className="page-index">
                <Head />
                <Navbar />
                <div className="content">
                    <div className="proto-hero">
                        <img
                            src="/static/images/logo.png"
                            alt="Prototype Guild Logo"
                        />
                        <h2>A Classic WoW guild</h2>
                        <h3>Golemagg - EU PVP</h3>
                    </div>
                    <Recruitment recruitment={recruitment} />
                    <RaidProgress progress={progress} />
                    <AboutUs />
                </div>
            </div>
        );
    }
}
