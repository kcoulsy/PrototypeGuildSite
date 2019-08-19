import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactTable from 'react-table';
import '../../../node_modules/react-table/react-table.css';

import { redirectIfNotAuthenticated, isAuthenticated, redirectIfAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';
import redirect from '../../../src/lib/redirect';

export default class Index extends Component {
    static getInitialProps(ctx) {
        redirectIfNotAuthenticated(ctx);
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: '/schema/get',
        }).then(({data}) => {
            this.setState({schemas: data})
        })
    }
    state = {
        schemas: []
    }
    render() {
        const {schemas} = this.state;
        return (
            <ManagerContainer {...this.props}>
                <h2>Schemas</h2>
                <Link href="/manager/schemas/create"><a><button>Create New</button></a></Link>
                <ReactTable
                    data={schemas}
                    resolveData={data => data.map(row => row)}
                    columns={[
                        {
                            Header: 'Schemas',
                            columns: [
                                {
                                    Header: 'Name',
                                    accessor: 'name',
                                },
                                {
                                    Header: 'Enabled',
                                    id: 'enabled',
                                    accessor: d => d.enabled ? 'True' : 'False',
                                },
                            ],
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                if (rowInfo && rowInfo.original && rowInfo.original.id) {
                                    redirect(`/manager/schemas/${rowInfo.original.id}`)
                                }
                                if (handleOriginal) {
                                    handleOriginal();
                                }
                            },
                        };
                    }}
                />
            </ManagerContainer>
        );
    }
}
