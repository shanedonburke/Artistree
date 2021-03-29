import React from 'react';

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
            </div>
        );
    }
}
export default NavBar;