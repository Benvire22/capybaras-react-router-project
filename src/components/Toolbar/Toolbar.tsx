import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.png";


const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg p-0 bg-warning" data-bs-theme="dark">
            <div className="container-xl">
                <NavLink to="/" className="navbar-brand"><img src={logo} style={{width: 100}}
                                                              alt="Capybaras"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-4 fs-4">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About capybaras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;