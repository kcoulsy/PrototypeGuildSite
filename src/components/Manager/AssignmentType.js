import React, { Component } from 'react';

import getValidPlayers from '../../lib/getValidPlayers';

const AssignmentType = ({
    name,
    assignments,
    values = {},
    updateAssignment,
    typeIndex,
    editMode,
    attendance,
    valid,
}) => {
    const availablePlayers = getValidPlayers({ players: attendance, valid });
    return (
        <div className="assignment-type">
            <strong>{name}</strong>
            <ul>
                {assignments.map((assignment, index) => {
                    return (
                        <PlayerListItem
                            key={assignment}
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
};

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

export default AssignmentType;
