import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

import { isAuthenticated } from '../../src/lib/auth';
import ManagerContainer from '../../src/containers/ManagerContainer';

export default class Import extends Component {
    static getInitialProps(ctx) {
        return {
            isAuthenticated: isAuthenticated(ctx),
        };
    }
    state = {
        players: [],
    };
    componentDidMount() {
        axios({
            method: 'get',
            url: '/players/get',
        }).then(({ data }) => {
            this.setState({ players: data.players });
        });
        // TODO - handle fail
    }
    render() {
        const { players } = this.state;

        return (
            <ManagerContainer {...this.props}>
                <h2>Players</h2>
                <ReactTable
                    data={players}
                    resolveData={data => data.map(row => row)}
                    columns={[
                        {
                            Header: 'Player',
                            columns: [
                                {
                                    Header: 'Name',
                                    accessor: 'name',
                                },
                                {
                                    Header: 'Class',
                                    accessor: 'class',
                                },
                                {
                                    Header: 'Level',
                                    accessor: 'level',
                                },
                            ],
                        },
                        {
                            Header: 'Rank',
                            columns: [
                                {
                                    Header: 'Rank',
                                    accessor: 'rank',
                                },
                                {
                                    Header: 'Index',
                                    accessor: 'rankIndex',
                                },
                            ],
                        },
                        {
                            Header: 'Notes',
                            columns: [
                                {
                                    Header: 'EPGP',
                                    accessor: 'officerNote',
                                },
                                {
                                    Header: 'Note',
                                    accessor: 'note',
                                },
                            ],
                        },
                    ]}
                    defaultSorted={[
                        {
                            id: 'rankIndex',
                            desc: false,
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                console.log(rowInfo);
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
