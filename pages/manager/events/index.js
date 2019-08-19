import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ReactTable from 'react-table';

import { isAuthenticated } from '../../../src/lib/auth';
import ManagerContainer from '../../../src/containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }

    state = {
        events: [],
    };

    componentDidMount = async () => {
        const { data } = await axios({
            method: 'get',
            url: `/events`,
        });
        if (data) {
            this.setState({
                events: data.events,
            });
        }
    };

    render() {
        return (
            <ManagerContainer {...this.props}>
                <h2>Events</h2>
                <Link href="/manager/events/create">
                    <a>
                        <button>Create New</button>
                    </a>
                </Link>
                <ReactTable
                    data={this.state.events}
                    resolveData={data => data.map(row => row)}
                    columns={[
                        {
                            Header: 'Events',
                            columns: [
                                {
                                    Header: 'Name',
                                    accessor: 'name',
                                },
                                {
                                    Header: 'Schema',
                                    accessor: 'Schema.name',
                                },
                                {
                                    Header: 'Date',
                                    accessor: 'date',
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                if (
                                    rowInfo &&
                                    rowInfo.original &&
                                    rowInfo.original.id
                                ) {
                                    redirect(
                                        `/manager/schemas/${
                                            rowInfo.original.id
                                        }`
                                    );
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
