import React from 'react';
import Panel from './Panel';
import Link from 'next/link';

export default () => {
    return (
        <section className="about-us">
            <Panel styleName="text-center">
                <p>
                    We are a newly formed EU guild whose plan is to prepare for
                    the official release of classic.
                </p>
                <p>
                    Experience doesn't matter, as long as you are dedicated to
                    learning and having fun then we want you in!
                </p>
                <p>
                    We have 2 dedicated raid nights a week as well as hosting
                    other events.
                </p>
                <p>
                    Main days will be <strong>Wed/Thurs/Sun 7-11pm st</strong>,
                    but be prepared to raid on extra days.
                </p>
                <p>
                    With this we expect our players to get to 60 in a timely
                    manner and do plenty of their own research of their classes.
                </p>

                <Link href="/apply">
                    <button className="proto-btn">Click here to apply!</button>
                </Link>
            </Panel>
        </section>
    );
};
