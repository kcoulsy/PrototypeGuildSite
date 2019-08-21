import React, { Component } from 'react';

import AssignmentSection from './AssignmentSection';

export default class Assignments extends Component {
    render() {
        const { schema, eventId, attendance } = this.props;

        if (!schema) {
            return <div>No Assignments</div>
        }

        return (
            <div>
                {this.props.schema.sections.map((section, index) => {
                    return (
                        <AssignmentSection
                            {...section}
                            key={section.name}
                            eventId={eventId}
                            bossIndex={index}
                            players={[]}
                            attendance={attendance}
                            initValues={{}}
                            isEditMode={true}
                            initialHasChanged={false}
                        />
                    );
                })}
                }
            </div>
        );
    }
}
