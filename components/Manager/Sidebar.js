import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faUpload } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <div className="sidebar">
            <FontAwesomeIcon icon={faUsers} />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <FontAwesomeIcon icon={faUpload} />
        </div>
    );
};
