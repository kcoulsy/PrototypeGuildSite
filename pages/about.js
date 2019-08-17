import React from 'react';

import Head from '../components/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Panel from '../components/Panel';

export default () => {
    return (
        <div className="container-main page-about">
            <Head />
            <Navbar />
            <div className="content">
                <Panel title="Guild Philosophy" styleName="">
                    <ul>
                        <li>
                            We aim to clear content pretty swiftly, with the
                            plan on speed clearing older farm content.
                        </li>
                        <li>
                            We have 2 official raid days per week, but players
                            are expected to work on their character outside of
                            raids and be prepared for extra raid days should we
                            need
                        </li>
                        <li>
                            Players are encouraged to group with other guildies
                            first when looking for group content.
                        </li>
                    </ul>
                </Panel>
                <Panel title="Raids">
                    <ul>
                        <li>
                            Our raid days will be the following:{' '}
                            <strong>
                                Wednesday &amp; Thursday starting at 19.00 CET
                            </strong>
                        </li>
                        <li>
                            We will raid for up to 4 hours (progression
                            including 2 10 minute breaks) or 3 hours (farm
                            including 1 10 min break)
                        </li>
                        <li>
                            You should aim to be online 30 minutes before the
                            raid, prepared with consumes and DMT buffs.
                        </li>
                        <li>
                            You should sign up to events at least 24 hours in
                            advance to confirm your spot in the raid, or else
                            risk losing a spot.
                        </li>
                        <li>
                            We would like raiders to maintain an 80%+
                            attendance, if you cannot attend for any reason then
                            please contact an officer.{' '}
                            <strong>Absenses MUST be reported.</strong>
                        </li>
                        <li>Trial status lasts between 2-4 weeks.</li>
                    </ul>
                </Panel>
                <Panel title="Player Expectations">
                    <p>
                        Every player is expected to show up well prepared to
                        raid. This includes bringing consumables and having gear
                        up to standard. Players should have attunements
                        completed before raids and have read up on the tactics
                        for encounters. There are links to information for
                        practically everything in the discord, if you have any
                        trouble ask your class leader.
                    </p>
                    <ul>
                        <li>
                            You should have a working microphone, even if you do
                            not intend to use it. PTT will be activated for all
                            players. Abusing the mic, or having a really low
                            quality annoying one may lead to being muted. Chit
                            chat is fine in raids as long as it doesn’t slow
                            down the raid.
                        </li>
                        <li>
                            You should be active during raid time and not go AFK
                            during trash or between pulls. It slows down the
                            raid and we will have breaks during the raid for
                            this reason.
                        </li>
                        <li>You must sign up to raid events.</li>
                    </ul>
                </Panel>
                <Panel title="Raid Addons">
                    <i>
                        May change depending on how addons are at launch, but as
                        a minimum you should have
                    </i>
                    <ul>
                        <li>Boss mods</li>
                        <li>Threat meters</li>
                        <li>Damage meters</li>
                    </ul>
                    Using a customised UI is encouraged. You are also expected
                    to have keybinds. How people still don’t in 2019 is a
                    mystery.
                </Panel>
                <Panel title="Loot System">
                    <p>
                        Our plan for our loot system to is to use{' '}
                        <strong>EPGP</strong> for the following reasons
                    </p>
                    <ul>
                        <li>
                            It is transparent, we want players to feel secure
                            that they will recieve the gear they want. It is the
                            reason we&apos;re playing after all.
                        </li>
                        <li>
                            It is easier to manage than a loot council, requires
                            less work to use and maintain.
                        </li>
                        <li>
                            It provides incentive for players to show up to
                            raids.
                        </li>
                    </ul>
                    <p>
                        The exception to this will be for our Tanks. It is too
                        important to make sure our tanks recieve gear. Tank gear
                        will be automatically given to tanks who need it. This
                        will be more important for tier gear. We will try to
                        gear tanks evenly, but with the inital few pieces to the
                        MT. Thunderfury bindings will be hard reserved for MT.
                    </p>
                </Panel>
                <Panel title="Guild Ranks">
                    <h3>Guild Master</h3>
                    <p>The ultimate voice of the guild.</p>
                    <h3>Officer</h3>
                    <p>
                        All officers share large amounts of responsibility and
                        will meet and discuss issues together. Keeps the Guild
                        master informed. Responsibilities include: Recruitment,
                        Handling Player Issues, Dealing with Loot, Trial
                        reviews, Raid Leading and so on.
                    </p>
                    <h3>Trial Officer</h3>
                    <p>
                        A new officer, like raiders we will trial out officers
                        to make sure they are the right fit. Have the same
                        responsibilities as other officers.
                    </p>
                    <h3>Class Leader</h3>
                    <p>
                        Generally well expertised players of their class.
                        Responsible for helping out their fellow class in terms
                        of gearing and rotation, providing information to keep
                        players performance up. In raids responsible for class
                        assignments ( tranq shot rotations or tank assignments
                        etc… ) Should be the first point of contact for any
                        class related issues.
                    </p>
                    <h3>Veteran</h3>
                    <p>
                        Proven core member of the raid team. Well skilled
                        players who have an exceptional attendance. Will be
                        prioritised for raid invites as they can be trusted.
                    </p>
                    <h3>Raider</h3>
                    <p>
                        Core team player. Maintains a high attendance and plays
                        well. Should consult with class leaders with any queries
                        regarding their class.
                    </p>
                    <h3>Trial</h3>
                    <p>
                        Prospective raiders. Generally lasts 2-4 weeks, in this
                        time you must maintain a high attendance and perform
                        well. You will have a trial evaluation and feedback will
                        be given.
                    </p>
                    <h3>Members</h3>
                    <p>
                        Social members of the guild. Has the option to trial for
                        the team.
                    </p>
                </Panel>
                <Footer />
            </div>
        </div>
    );
};
