import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './artistree_logo.png';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <img className="logo" src={Logo} alt="Artistree Logo" />
                <div className="navbar-links">
                    <Link to="/"><span className="navbar-link">Gallery</span></Link>
                    <Link to="/canvas"><span className="navbar-link">Canvas</span></Link>
                    <Link to="/my-submissions"><span className="navbar-link">My Submissions</span></Link>
                </div>
                <span className="material-icons hamburger-icon">menu</span>
            </div>
        );
    }
}
export default NavBar;