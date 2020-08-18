import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar__inner">
                    <Link to="/" className="brand">
                        Weathery
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">
                                Forecast
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;