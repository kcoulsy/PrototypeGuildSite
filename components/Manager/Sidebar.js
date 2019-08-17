import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers,
    faCalendarAlt,
    faUpload,
    faSignInAlt,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export default ({ isAuthenticated }) => {
    return (
        <div className="sidebar">
            <Link href="/manager/users">
                <a>
                    <FontAwesomeIcon icon={faUsers} />
                </a>
            </Link>
            <Link href="/manager/events">
                <a>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </a>
            </Link>
            {isAuthenticated ? (
                <Link href="/manager/import">
                    <a>
                        <FontAwesomeIcon icon={faUpload} />
                    </a>
                </Link>
            ) : null}
            <div className="hidden">
                {isAuthenticated ? (
                    <Link href="/auth/logout">
                        <a>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </a>
                    </Link>
                ) : (
                    <Link href="/auth/login">
                        <a>
                            <FontAwesomeIcon icon={faSignInAlt} />
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
};
