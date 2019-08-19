import React from 'react';
import Link from 'next/link';

export default () => {
    return (
        <div className="proto-nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link href="/">
                        <a className="nav-item">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-item">About</a>
                    </Link>
                </div>
                <div className="nav-right">
                    <a href="https://discord.gg/5YCTZ7K" className="nav-item right">Discord</a>
                    <Link href="/apply">
                        <a className="nav-item right">Apply</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
