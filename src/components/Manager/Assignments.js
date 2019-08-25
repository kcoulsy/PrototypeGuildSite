import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import AssignmentSection from './AssignmentSection';

class Assignments extends Component {
    state = {
        initValues: {},
        playerAssignments: [],
    };

    componentDidMount() {
        this.fetchAssignments();
    }

    fetchAssignments = async () => {
        try {
            const { data } = await axios({
                method: 'get',
                url: `/assignments/${this.props.eventId}`,
            });
            this.setState({ playerAssignments: data.assignments });
        } catch (e) {}
    };

    render() {
        const { schema, eventId, attendance } = this.props;
        const { playerAssignments } = this.state;

        return (
            <div>
                {schema ? (
                    schema.sections.map((section, index) => {
                        const assignments = playerAssignments.filter(
                            assignment => assignment.sectionIndex === index
                        );
                        return (
                            <AssignmentSection
                                key={section.name}
                                name={section.name}
                                types={section.types}
                                sectionIndex={index}
                                attendance={attendance}
                                playerAssignments={assignments}
                                eventId={parseInt(eventId, 10)}
                            />
                        );
                    })
                ) : (
                    <div>No Schema Found</div>
                )}
            </div>
        );
    }
}

Assignments.propTypes = {
    schema: PropTypes.object.isRequired,
    eventId: PropTypes.number.isRequired,
    attendance: PropTypes.object.isRequired,
};

export default Assignments;
