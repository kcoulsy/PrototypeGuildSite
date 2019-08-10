import React from 'react';
import Link from 'next/link';

import classes from '../constants/classes';

export default ({ recruitment = {} }) => {
    return (
        <div className="proto-recruitment-icons">
            <h2>Recruitment</h2>
            <div className="icons">
                {Object.entries(classes).map(([key, value]) => {
                    const isRecruiting = recruitment[key] || false;

                    return (
                        <Link href="/apply" key={key}>
                            <div className="icon">
                                <img
                                    src={`/static/images/classes/${value.name.toLowerCase()}.png`}
                                    alt={value.name}
                                />
                                <span
                                    className={`status ${
                                        isRecruiting ? 'open' : 'closed'
                                    }`}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
