import React, { Component } from 'react';

import { toast } from 'react-toastify';

import AssignmentType from './AssignmentType';

import getValidPlayers from '../../lib/getValidPlayers';

export default class AssignmentSection extends Component {
    state = {
        assignments: this.props.initValues,
        editMode: false,
    };

    componentDidMount() {
        this.setState({ editMode: true });
    }

    getInitialAssignments = (state, props) => {
        const { types, attendance } = this.props;
        const assignments = Object.assign({}, this.state.assignments);

        types.forEach((type, typeIndex) => {
            if (typeof assignments[typeIndex] === 'undefined') {
                assignments[typeIndex] = {};
            }

            const available = getValidPlayers({players: attendance, valid: type.valid})

            type.assignments.forEach((assignment, assIndex) => {
                if (
                    typeof assignments[typeIndex][assIndex] === 'undefined' ||
                    assignments[typeIndex][assIndex] === 'none'
                ) {
                    assignments[typeIndex][assIndex] =
                        (available[assIndex] && available[assIndex].Player.name) ||
                        'none';
                }
            });
        });
        return assignments;
    };

    updateAssignment = ({ typeIndex, assignmentIndex, value }) => {
        const newAss = this.state.assignments;
        newAss[typeIndex][assignmentIndex] = value;
        this.setState({ assignments: newAss });
    };

    save = () => {
        this.setState({ hasChanged: false, editMode: false });
        // toast()
        toast(`Assignments for ${this.props.name} saved!`, {
            type: toast.TYPE.INFO,
            autoClose: 5000,
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log({
            assignments: this.state.assignments,
            bossIndex: this.props.bossIndex,
            eventId: this.props.eventId,
        });
    };

    render() {
        const { name, types, players, isEditMode, attendance } = this.props;
        const assignments = this.getInitialAssignments();

        return (
            <div className="card-container">
                <div className="card">
                    <span className="card-name">{name}</span>
                    <div className="types">
                        {types.map((type, index) => {
                            return (
                                <AssignmentType
                                    key={type.name}
                                    {...type}
                                    typeIndex={index}
                                    attendance={attendance}
                                    players={players}
                                    values={assignments[index]}
                                    updateAssignment={this.updateAssignment}
                                    editMode={this.state.editMode}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="card-buttons">
                    {this.state.editMode ? (
                        <button className="btn save" onClick={this.save}>
                            Save
                        </button>
                    ) : (
                        <button
                            className="btn edit"
                            onClick={() =>
                                this.setState({
                                    editMode: !this.state.editMode,
                                })
                            }
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
