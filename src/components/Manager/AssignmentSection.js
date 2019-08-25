import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';

import AssignmentType from './AssignmentType';
import getValidPlayers from '../../lib/getValidPlayers';

class AssignmentSection extends Component {
    state = {
        numberOfAssignments: 0,
        isEditMode: false,
        playerAssignments: [],
    };

    componentDidMount() {
        this.updatePlayerAssignments();
    }

    componentDidUpdate({ playerAssignments }) {
        if (playerAssignments.length === this.props.playerAssignments.length) {
            return;
        }
        this.updatePlayerAssignments();
    }

    updatePlayerAssignments = () => {
        const { types, playerAssignments } = this.props;
        let numberOfAssignments = types.reduce((acc, { assignments }) => {
            acc += assignments.length;
            return acc;
        }, 0);
        const isEditMode = numberOfAssignments !== playerAssignments.length;
        this.setState({
            numberOfAssignments,
            isEditMode,
            playerAssignments: playerAssignments,
        });
    };

    getInitialAssignments = () => {
        const { types, attendance, playerAssignments } = this.props;
        const assignments = {};

        types.forEach((type, typeIndex) => {
            if (typeof assignments[typeIndex] === 'undefined') {
                assignments[typeIndex] = {};
            }

            const available = getValidPlayers({
                players: attendance,
                valid: type.valid,
            });

            type.assignments.forEach((assignment, assIndex) => {
                const play = playerAssignments.find(el => {
                    return (
                        el.typeIndex === typeIndex &&
                        el.assignmentIndex === assIndex
                    );
                });

                if (
                    typeof assignments[typeIndex][assIndex] === 'undefined' ||
                    assignments[typeIndex][assIndex] === 'none'
                ) {
                    assignments[typeIndex][assIndex] =
                        (play && play.assignment) ||
                        (available[assIndex] &&
                            available[assIndex].Player.name) ||
                        'none';
                }
            });
        });
        return { assignments };
    };

    save = async ev => {
        const { name, eventId, sectionIndex } = this.props;
        ev.preventDefault();
        const selectEls = ev.target.querySelectorAll('select');

        const assignmentChanges = [];

        selectEls.forEach(select => {
            assignmentChanges.push({
                eventId: parseInt(eventId, 10),
                sectionIndex: parseInt(sectionIndex, 10),
                assignment: select.value,
                assignmentIndex: parseInt(
                    select.getAttribute('data-assignment'),
                    10
                ),
                typeIndex: parseInt(select.getAttribute('data-type'), 10),
            });
        });
        try {
            const save = await axios({
                method: 'post',
                url: '/assignments',
                data: {
                    assignments: assignmentChanges,
                },
            });

            if (save) {
                this.setState({ isEditMode: false });
                toast(`Assignments for ${name} saved!`, {
                    type: toast.TYPE.INFO,
                    autoClose: 5000,
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        } catch (e) {}
    };

    render() {
        const { name, types, sectionIndex, attendance } = this.props;
        const { isEditMode } = this.state;
        const { assignments } = this.getInitialAssignments();

        return (
            <form onSubmit={this.save} className="card-container">
                <div className="card">
                    <span className="card-name">{name}</span>
                    <div className="types">
                        {types.map((type, index) => {
                            return (
                                <AssignmentType
                                    key={type.name}
                                    {...type}
                                    sectionIndex={sectionIndex}
                                    typeIndex={index}
                                    attendance={attendance}
                                    values={assignments[index]}
                                    editMode={isEditMode}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="card-buttons">
                    {isEditMode ? (
                        <input
                            type="submit"
                            value="Save"
                            className="btn save"
                        />
                    ) : (
                        <button
                            className="btn edit"
                            onClick={() =>
                                this.setState({
                                    isEditMode: true,
                                })
                            }
                        >
                            Edit
                        </button>
                    )}
                </div>
            </form>
        );
    }
}

AssignmentSection.propTypes = {
    name: PropTypes.string.isRequired, // Section name
    types: PropTypes.array.isRequired, // Section assignment types
    sectionIndex: PropTypes.number.isRequired, // Section Index
    attendance: PropTypes.object.isRequired, // Player attendance for the event
    playerAssignments: PropTypes.array.isRequired,
    eventId: PropTypes.number.isRequired,
};

export default AssignmentSection;
