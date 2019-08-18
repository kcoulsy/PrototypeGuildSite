import React, { Component } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import { redirectIfNotAuthenticated, isAuthenticated } from '../../lib/auth';

import ManagerContainer from '../../containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
            entered: false
        };
    }
    state = {
        data: {}
    }
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Importer</h2>
                <JSONInput
                    id="player_importer"
                    onChange={({jsObject}) =>
                        this.setState({ data: jsObject, entered: true})
                    }
                    locale={locale}
                    height="550px"
                    width="100%"
                />
                { this.state.entered ? (<button>Save</button>) : null}
            </ManagerContainer>
        );
    }
}
