import React from 'react';

import Sidebar from '../components/Manager/Sidebar';
import '../styles/index.scss';
import 'react-table/react-table.css';
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

toast.configure();

export default ({ isAuthenticated, children }) => {
    return (
        <div className="container-manager">
            <Sidebar isAuthenticated={isAuthenticated} />
            <div className="content">{children}</div>
        </div>
    );
};

