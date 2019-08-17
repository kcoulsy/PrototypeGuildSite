import React, { Component } from 'react';
import { redirectIfNotAuthenticated, isAuthenticated } from '../../../lib/auth';

import validateSchema from '../../../lib/validateSchema';
import ManagerContainer from '../../../containers/ManagerContainer';

export default class Create extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    state = {
        schema: '',
        errors: []
    }
    validateSchema = () => {
        let errors = []
        try {
            const schema = JSON.parse(this.state.schema);
            const validation = validateSchema(schema);
            errors = [...validation.errors, ...errors]
        } catch(e) {
            console.log(e);
            errors.push('Not Valid JSON');
        }
        this.setState({errors})
    }
    render() {
        console.log(this.state);
        return (
            <ManagerContainer {...this.props}>
                <h2>Create Schema</h2>
                <textarea onChange={(ev) => this.setState({schema: ev.currentTarget.value})}></textarea>
                <button onClick={this.validateSchema}>Validate</button>
                <ul>

                {this.state.errors.map(error => {
                    return <li key={error.split(' ').join('_').toLowerCase()}>{error}</li>
                })}
                </ul>
            </ManagerContainer>
        );
    }
}
