import React from 'react';

import Sidebar from '../components/Manager/Sidebar';
import '../styles/manager/index.scss';

export default ({ children }) => {
    return (
        <div className="container-manager">
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
};

