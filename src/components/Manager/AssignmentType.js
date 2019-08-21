import React, { Component } from 'react';

export default class AssignmentType extends Component {
    getAvailablePlayers = () => {
        const { attendance, valid } = this.props;
        return Object.values(attendance).filter(player => {
            if (player.role === 'none') return false;
            return (
                valid.includes(player.role) ||
                valid.includes(
                    player.Player && player.Player.class.toLowerCase()
                )
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
                        return (
                            <PlayerListItem
                                assignment={assignment}
                                editMode={editMode}
                                updateAssignment={updateAssignment}
                                index={index}
                                typeIndex={typeIndex}
                                availablePlayers={availablePlayers}
                                selected={values[index]}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const PlayerListItem = ({
    assignment,
    editMode,
    updateAssignment,
    index,
    typeIndex,
    availablePlayers,
    selected,
}) => (
    <li>
        {assignment}
        {editMode ? (
            <div>
                <select
                    value={selected}
                    onChange={ev => {
                        updateAssignment({
                            assignmentIndex: index,
                            value: ev.currentTarget.value,
                            typeIndex,
                        });
                    }}
                >
                    <option>None</option>
                    {availablePlayers.map(({ Player }) => {
                        return (
                            <option value={Player.name}>
                                {Player.name} ({Player.class.slice(0, 4)})
                            </option>
                        );
                    })}
                </select>
            </div>
        ) : (
            <span>{selected}</span>
        )}
    </li>
);
