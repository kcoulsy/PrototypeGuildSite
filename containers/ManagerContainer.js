import React from 'react';

import Sidebar from '../components/Manager/Sidebar';
import '../styles/manager/index.scss';

export default ({ isAuthenticated, children }) => {
    return (
        <div className="container-manager">
            <Sidebar isAuthenticated={isAuthenticated} />
            <div className="content">{children}</div>
        </div>
    );
};

