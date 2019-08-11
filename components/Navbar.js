import React from 'react';
import Link from 'next/link';

export default () => {
    return (
        <div className="proto-nav">
            <div className="nav-container">
                <div className="nav-left">
                    <Link href="/">
                        <div className="nav-item">Home</div>
                    </Link>
                    <Link href="/about">
                        <div className="nav-item">About</div>
                    </Link>
                </div>
                <div className="nav-right">
                    <a href="https://discord.gg/5YCTZ7K" className="nav-item right">Discord</a>
                    <Link href="/apply">
                        <div className="nav-item right">Apply</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
