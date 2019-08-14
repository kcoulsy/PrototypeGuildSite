import React from 'react';
import Link from 'next/link';

import classes from '../constants/classes';

export default ({ recruitment = [] }) => {
    return (
        <div className="proto-recruitment-icons">
            <h2>Recruitment</h2>
            <div className="icons">
                {recruitment.map(({ id, name, enabled }) => {
                    return (
                        <Link href="/apply" key={id}>
                            <a>
                                <div className="icon">
                                    <img
                                        src={`/static/images/classes/${name.toLowerCase()}.png`}
                                        alt={name}
                                    />
                                    <span
                                        className={`status ${
                                            enabled ? 'open' : 'closed'
                                        }`}
                                    />
                                </div>
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
