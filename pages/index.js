import React, { Fragment } from 'react';
import Link from 'next/link';

import Head from '../components/head';
import Navbar from '../components/Navbar';
import '../styles/index.scss';

export default () => (
    <Fragment>
        <Head />
        <Navbar />
    </Fragment>
);
