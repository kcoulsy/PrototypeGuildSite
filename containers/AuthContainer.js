import React from 'react';

import '../styles/auth/index.scss';

export default ({ children }) => {
    return (
        <div className="container-auth">
            <div className="content">{children}</div>
        </div>
    );
};

