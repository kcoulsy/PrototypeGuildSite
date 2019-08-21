import React, { Component } from 'react';

//   {
//       name: 'Tank Assignments',
//       valid_classes: ['warrior', 'druid'],
//       assignments: ['Main Tank', 'Off Tank']
//   }

export default class AssignmentType extends Component {
    getAvailablePlayers = () => {
        const { attendance, valid } = this.props;
        return Object.values(attendance).filter(player => {
          if (player.role === 'none') return false;
            return (
                valid.includes(player.role) ||
                valid.includes(player.Player && player.Player.class.toLowerCase())
            );
        });
    };
    render() {
        const {
            name,
            assignments,
            values = {},
            updateAssignment,
            typeIndex,
            editMode,
        } = this.props;
        const availablePlayers = this.getAvailablePlayers();

        return (
            <div className="assignment-type">
                <strong>{name}</strong>
                <ul>
                    {assignments.map((assignment, index) => {
                        const selected = values[index];
                        return (
                            <li>
                                {assignment}
                                {editMode ? (
                                    <div>
                                        <select
                                            value={selected}
                                            onChange={ev => {
                                                updateAssignment({
                                                    assignmentIndex: index,
                                                    value:
                                                        ev.currentTarget.value,
                                                    typeIndex,
                                                });
                                            }}
                                        >
                                            <option>None</option>
                                            {availablePlayers.map(
                                                ({ Player }) => {
                                                    return (
                                                        <option
                                                            value={Player.name}
                                                        >
                                                            {Player.name} (
                                                            {Player.class.slice(
                                                                0,
                                                                4
                                                            )}
                                                            )
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>
                                    </div>
                                ) : (
                                    <span>{selected}</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
