import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Panel from '../components/Panel';

export default class Apply extends Component {
    static getInitialProps = ({ req }) => {
        let protocol = 'https:';
        let host = req ? req.headers.host : window.location.hostname;
        if (host.indexOf('localhost') > -1) {
            protocol = 'http:';
        }
        return { urlPath: `${protocol}${host}/` };
    };

    state = {
        recaptcha: '',
        hasSubmitted: false,
        characterName: '',
        playerClass: '',
        playerRole: '',
        professionOne: '',
        professionTwo: '',
        discordTag: '',
        aboutSelf: '',
        value: '',
        experience: '',
        ui: '',
        anythingElse: '',
        error: '',
    };

    handleChange = ev => {
        const { error } = this.state;
        if (error.length) this.setError('');

        const val = ev.target.value;
        const field = ev.target.name;
        const newState = {};
        newState[field] = val;

        this.setState(() => {
            return newState;
        });
    };

    handleSubmit = ev => {
        const data = this.state;

        ev.preventDefault();

        if (this.validate()) {
            //     auth.api('post', '/users', {
            //         data
            //     }).then(() => {
            //         Router.push(SITE_URL);
            //     });
            console.log(data);
            this.setState({ hasSubmitted: true });
        }
    };

    validate = () => {
        const {
            characterName,
            playerClass,
            playerRole,
            discordTag,
            professionOne,
            professionTwo,
        } = this.state;

        if (!discordTag) {
            this.setError('You must add your discord!');
            return false;
        }

        if (!characterName.length) {
            this.setError('You must enter your character name!');
            return false;
        }

        if (!playerClass.length) {
            this.setError('You must select a class!');
            return false;
        }

        if (!playerRole.length) {
            this.setError('You must select a role!');
            return false;
        }

        if (!professionOne.length || !professionTwo.length) {
            this.setError('You must pick both professions!');
            return false;
        }

        return true;
    };

    setError = msg => {
        this.setState({ error: msg });
    };

    render() {
        const { error, hasSubmitted } = this.state;
        if (hasSubmitted) {
            return (
                <div>
                    <Navbar />
                    <div className="content">
                        <Panel title="Success" styleName="panel-sm text-center">
                            <p>Thanks for Submitting an application!</p>
                            <p>
                                <a
                                    href="https://discord.gg/5YCTZ7K"
                                    className="link-button"
                                >
                                    Come say hi in the discord!
                                </a>
                            </p>
                        </Panel>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <Navbar />
                <div className="content">
                    <Panel title="Apply to the guild" styleName="panel-md">
                        <form className="proto-form form-apply">
                            <input
                                name="discordTag"
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Discord Tag"
                            />
                            <input
                                name="characterName"
                                type="text"
                                onChange={this.handleChange}
                                placeholder="Character Name"
                            />
                            <select
                                name="playerClass"
                                onChange={this.handleChange}
                            >
                                <option value="">Please select a class</option>
                                <option value="warrior">Warrior</option>
                                <option value="paladin">Paladin</option>
                                <option value="hunter">Hunter</option>
                                <option value="druid">Druid</option>
                                <option value="rogue">Rogue</option>
                                <option value="mage">Mage</option>
                                <option value="priest">Priest</option>
                                <option value="warlock">Warlock</option>
                            </select>
                            <select
                                name="playerRole"
                                onChange={this.handleChange}
                            >
                                <option value="">Please select a role</option>
                                <option value="tank">Tank</option>
                                <option value="healer">Healer</option>
                                <option value="melee">Melee</option>
                                <option value="ranged">Ranged</option>
                            </select>
                            <select
                                name="professionOne"
                                onChange={this.handleChange}
                            >
                                <option value="">
                                    Please select your first profession
                                </option>
                                <option value="mining">Mining</option>
                                <option value="herbalism">Herbalism</option>
                                <option value="skinning">Skinning</option>
                                <option value="engineering">Engineering</option>
                                <option value="enchanting">Enchanting</option>
                                <option value="alchemy">Alchemy</option>
                                <option value="tailoring">Tailoring</option>
                                <option value="leatherworking">
                                    Leatherworking
                                </option>
                                <option value="blacksmithing">
                                    Blacksmithing
                                </option>
                            </select>
                            <select
                                name="professionTwo"
                                onChange={this.handleChange}
                            >
                                <option value="">
                                    Please select your first profession
                                </option>
                                <option value="mining">Mining</option>
                                <option value="herbalism">Herbalism</option>
                                <option value="skinning">Skinning</option>
                                <option value="engineering">Engineering</option>
                                <option value="enchanting">Enchanting</option>
                                <option value="alchemy">Alchemy</option>
                                <option value="tailoring">Tailoring</option>
                                <option value="leatherworking">
                                    Leatherworking
                                </option>
                                <option value="blacksmithing">
                                    Blacksmithing
                                </option>
                            </select>
                            <textarea
                                name="aboutSelf"
                                cols="30"
                                rows="5"
                                onChange={this.handleChange}
                                placeholder="Tell us about yourself?"
                            />
                            <textarea
                                name="value"
                                cols="30"
                                rows="5"
                                onChange={this.handleChange}
                                placeholder="What do you value in a guild?"
                            />
                            <textarea
                                name="experience"
                                cols="30"
                                rows="5"
                                onChange={this.handleChange}
                                placeholder="What experience do you have raiding in wow? (Can be classic, bfa or anything in between, just be honest)"
                            />
                            <input
                                type="text"
                                name="ui"
                                placeholder="A recent UI screenshot."
                                onChange={this.handleChange}
                            />
                            <textarea
                                name="anythingElse"
                                cols="30"
                                rows="5"
                                onChange={this.handleChange}
                                placeholder="Anything else you would like to add?"
                            />
                            <button
                                className="proto-btn"
                                onClick={this.handleSubmit}
                                type="submit"
                            >
                                Apply Now
                            </button>
                        </form>
                        {error}
                    </Panel>
                </div>
            </div>
        );
    }
}
