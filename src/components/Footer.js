import React from 'react';
import Link from 'next/link';

export default () => {
    return (
        <div className="proto-footer">
            <div className="container">
                <span>Copyright &copy; 2019 - Prototype Guild</span>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <a href="https://discord.gg/5YCTZ7K">Discord</a>
                    </li>
                    <li>
                        <Link href="/apply"><a>Apply</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
