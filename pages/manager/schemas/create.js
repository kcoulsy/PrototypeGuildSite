import React, { Component } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import { redirectIfNotAuthenticated, isAuthenticated } from '../../../src/lib/auth';

import validateSchema from '../../../src/lib/validateSchema';
import ManagerContainer from '../../../src/containers/ManagerContainer';
import exampleSchema from '../../../src/constants/exampleSchema';

export default class Create extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    state = {
        schema: '',
        errors: [],
        isValid: false,
    };
    validateSchema = () => {
        let errors = [];
        let isValid = true;
        try {
            const schema = JSON.parse(this.state.schema);
            const validation = validateSchema(schema);
            errors = [...validation.errors, ...errors];
            isValid = validation.isValid;
        } catch (e) {
            errors.push('Not Valid JSON');
            isValid = false;
        }
        this.setState({ errors, isValid });
    };
    // TODO - save schema
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Create Schema</h2>
                <JSONInput
                    id="schema_inputter"
                    placeholder={exampleSchema}
                    onChange={({ json }) =>
                        this.setState({ schema: json, isValid: false })
                    }
                    locale={locale}
                    height="550px"
                    width="100%"
                />
                <button onClick={this.validateSchema}>Validate</button>
                <ul>
                    {this.state.errors.map(error => {
                        return (
                            <li
                                key={error
                                    .split(' ')
                                    .join('_')
                                    .toLowerCase()}
                            >
                                {error}
                            </li>
                        );
                    })}
                </ul>
                {this.state.isValid ? <button>Create</button> : null}
            </ManagerContainer>
        );
    }
}
