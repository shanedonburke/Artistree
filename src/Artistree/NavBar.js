import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

import Logo from './artistree_logo.png';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hamburgerOpen: false,
            modalOpen: false,
        };
    }

    render() {
        return (
            <div className="navbar">
                <Link to="/"><img className="logo" src={Logo} alt="Artistree Logo" /></Link>
                <div className="navbar-links">
                    <Link to="/"><span className="navbar-link">Gallery</span></Link>
                    <Link to="/canvas"><span className="navbar-link">Canvas</span></Link>
                    <Link to="/my-submissions"><span className="navbar-link">My Submissions</span></Link>
                </div>
                <div>
                    <Modal isOpen={this.state.modalOpen} toggle={() => this.setState({modalOpen: !this.state.modalOpen})}>
                        <ModalHeader>Hello</ModalHeader>
                        <ModalBody>World</ModalBody>
                    </Modal>
                </div>
                <div>
                    <Dropdown isOpen={this.state.hamburgerOpen} toggle={() => this.setState({hamburgerOpen: !this.state.hamburgerOpen})}>
                        <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={this.state.hamburgerOpen}>
                            <span className="material-icons hamburger-icon">menu</span>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.setState({modalOpen: true})}>Login</DropdownItem>
                            <DropdownItem>Logout</DropdownItem>
                            <DropdownItem>Account</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
export default NavBar;