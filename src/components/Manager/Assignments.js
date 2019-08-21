import React from 'react';

import AssignmentSection from './AssignmentSection';

const Assignments = ({ schema, eventId, attendance }) => (
    <div>
        {schema ? (
            schema.sections.map((section, index) => {
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
            })
        ) : (
            <div>No Schema Found</div>
        )}
    </div>
);

export default Assignments;