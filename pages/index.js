import React, { Component } from 'react';
import axios from 'axios';

import Head from '../src/components/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Recruitment from '../src/components/Recruitment';
import RaidProgress from '../src/components/RaidProgress';
import AboutUs from '../src/components/AboutUs';

export default class Index extends Component {
    static getInitialProps({ query }) {
        return query;
    }

    state = {
        recruitment: [],
        progress: []
    }

    componentDidMount() {
        axios({ url: '/recruitment', method: 'get' }).then(({ data }) => {
            this.setState({ recruitment: data });
        });
        axios({ url: '/progress', method: 'get' }).then(({ data }) => {
            this.setState({ progress: data });
        });
    }

    render() {
        const { recruitment, progress } = this.state;

        return (
            <div className="container-main page-index">
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
                    <Footer />
                </div>
            </div>
        );
    }
}
