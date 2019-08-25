import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getValidPlayers from '../../lib/getValidPlayers';

export class AssignmentType extends Component {
    state = {
        values: {},
    };
    componentDidMount() {
        const {values} = this.props;
        this.setState({ values });
    }
    componentDidUpdate(prevProps) {
        const {values} = this.props;
        let changes = false;
        Object.entries(prevProps.values).forEach(([key, value]) => {
            if (values[key] !== value) {
                changes = true;
            }
        });
        if (changes) {
            this.setState({ values });
        }
    }
    render() {
        const {
            name,
            assignments,
            typeIndex,
            editMode,
            attendance,
            valid,
            sectionIndex,
        } = this.props;
        const { values } = this.state;
        const availablePlayers = getValidPlayers({
            players: attendance,
            valid,
        });
        return (
            <div className="assignment-type">
                <strong>{name}</strong>
                <ul>
                    {assignments.map((assignment, index) => {
                        return (
                            <PlayerListItem
                                key={`${sectionIndex}_${typeIndex}_${assignment}`}
                                assignment={assignment}
                                editMode={editMode}
                                updateAssignment={ev => {
                                    const { values } = this.state;
                                    values[index] = ev.currentTarget.value;
                                    this.setState({ values });
                                }}
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

AssignmentType.protoTypes = {
    name: PropTypes.string.isRequired, // Assignment Type Name
    assignments: PropTypes.array.isRequired, // Assignment Type assignments
    typeIndex: PropTypes.number.isRequired, //typeIndex value
    editMode: PropTypes.bool.isRequired, // Edit Mode - If true show as select - else plain text
    attendance: PropTypes.object.isRequired, // Players attendance for the event
    valid: PropTypes.array.isRequired, // Array of valid classes and roles for the assignment type
    sectionIndex: PropTypes.number.isRequired, // Index of the current section
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
                    data-type={typeIndex}
                    data-assignment={index}
                    onChange={updateAssignment}
                >
                    <option>None</option>
                    {availablePlayers.map(({ Player }) => {
                        return (
                            <option value={Player.name} key={Player.name}>
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

PlayerListItem.protoTypes = {
    assignment: PropTypes.string.isRequired, // Assignment Name
    editMode: PropTypes.bool.isRequired, // Edit Mode - If true show as select - else plain text
    updateAssignment: PropTypes.func.isRequired, // Function for on change, update parent's state
    index: PropTypes.number.isRequired, // assignmentIndex value
    typeIndex: PropTypes.number.isRequired, //typeIndex value
    availablePlayers: PropTypes.array.isRequired, // Players to populate the select
    selected: PropTypes.any.isRequired, // Currently selected assignment
};

export default AssignmentType;
