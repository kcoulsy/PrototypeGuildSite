import React from 'react';

export default ({ progress = [] }) => (
    <section className="progress">
        <h2>Raid Progress</h2>
        <div className="progress">
            { progress.map(raid => (
                <div className="raid" key={raid.name}>
                    <span className="raid-name">{raid.name}</span>
                    <div className="bar-full">
                        <div
                            className="bar-cont"
                            style={{
                                width: `${(raid.done / raid.of) * 100}%`,
                            }}
                        >
                            <div className="bar" />
                        </div>
                    </div>
                    <span className="progress-num">
                        {raid.done}/{raid.of}
                    </span>
                </div>
            )) }
        </div>
    </section>
);
