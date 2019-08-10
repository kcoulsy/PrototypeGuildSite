import React from 'react';
import progress from '../constants/progress';

export default () => (
    <section className="progress">
        <h2>Raid Progress</h2>
        <div className="progress">
            {Object.values(progress).map(raid => (
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
            ))}
        </div>
    </section>
);
