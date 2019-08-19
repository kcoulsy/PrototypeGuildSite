import React, { Component } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import axios from 'axios';

import { redirectIfNotAuthenticated, isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';

export default class Show extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
            entered: false,
            id: ctx.query.id,
        };
    }
    state = {
        data: {},
        name: 'Schema',
        enabled: true,
    };
    componentDidMount = () => {
        const { id } = this.props;
        axios({
            method: 'get',
            url: `/schema/${id}`,
        }).then(({ data }) => {
            if (data) {
                this.setState({
                    name: data.name,
                    enabled: data.enabled,
                    schema: JSON.parse(data.schema),
                });
            }
        });
        //TODO handle fail - basic validation (is this an array?)
    };
    handleUpdate = () => {
        axios({
            method: 'patch',
            url: `/schema/update`,
            data: {
                id: this.props.id,
                enabled: !this.state.enabled,
            },
        }).then(({ data }) => {
            this.setState({ enabled: data.enabled });
        });

        // TODO catch error
    };
    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>
                    {this.state.name} (
                    {this.state.enabled ? 'Enabled' : 'Disabled'})
                </h2>
                <JSONInput
                    id="player_importer"
                    placeholder={this.state.schema}
                    viewOnly={true}
                    locale={locale}
                    height="550px"
                    width="100%"
                />
                <button onClick={this.handleUpdate}>
                    {this.state.enabled ? 'Disable' : 'Enable'}
                </button>
            </ManagerContainer>
        );
    }
}
