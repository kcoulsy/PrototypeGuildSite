import React, { Component } from 'react';

import { login, redirectIfAuthenticated } from '../../src/lib/auth';
import AuthContainer from '../../src/containers/AuthContainer';

export default class Login extends Component {
    static getInitialProps(ctx) {
        redirectIfAuthenticated(ctx);
        return {};
    }
    state = {
        username: '',
        password: '',
    };
    handleSubmit = ev => {
        ev.preventDefault();
        login(this.state.username, this.state.password, this.state.password);
    };
    render() {
        return (
            <AuthContainer>
                <h2>Login</h2>
                <form className="login" onSubmit={this.handleSubmit}>
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
                    <input type="submit" value="Login" className="btn" />
                </form>
            </AuthContainer>
        );
    }
}
