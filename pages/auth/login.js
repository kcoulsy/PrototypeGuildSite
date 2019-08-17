import React, { Component } from 'react';
import { login, redirectIfAuthenticated } from '../../lib/auth';

export default class Login extends Component {
    static getInitialProps(ctx) {
        redirectIfAuthenticated(ctx);
        return {};
    }
    state = {
        username: '',
        password: '',
    };
    handleSubmit = () => {
        login(this.state.username, this.state.password, this.state.password);
    };
    render() {
        return (
            <div>
                <input
                    name="username"
                    value={this.state.username}
                    onChange={ev =>
                        this.setState({ username: ev.currentTarget.value })
                    }
                    placeholder="Username"
                />
                <input
                    name="password"
                    value={this.state.password}
                    onChange={ev =>
                        this.setState({ password: ev.currentTarget.value })
                    }
                    placeholder="Password"
                />
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        );
    }
}
