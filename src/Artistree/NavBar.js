import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Button
} from 'reactstrap'

import Logo from './artistree_logo.png';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hamburgerOpen: false,
            loginModalOpen: false,
            loginLogoutText: "Login",
        };
    }

    loginLogout = () => {
        if (this.state.loginLogoutText === "Login") {
            this.setState({
                loginModalOpen: true,
                loginLogoutText: "Logout",
            });
        } else {
            this.setState({loginLogoutText: "Login"});
        }
    }

    render() {
        return (
            <div className="navbar">
                <Link to="/"><img className="logo" src={Logo} alt="Artistree Logo" /></Link>
                <div className="navbar-links">
                    <Link to="/"><span className="navbar-link">Gallery</span></Link>
                    <Link to="/canvas"><span className="navbar-link">Canvas</span></Link>
                    <Link to="/my-submissions"><span className="navbar-link">My Submissions</span></Link>
                    <Link to="/leave-feedback"><span className="navbar-link">Leave Feedback(RM later)</span></Link>

                </div>
                <div>
                    <Modal isOpen={this.state.loginModalOpen} toggle={() => this.setState({loginModalOpen: !this.state.loginModalOpen})}>
                        <ModalHeader toggle={() => this.setState({loginModalOpen: false})}>Login to Artistree</ModalHeader>
                        <ModalBody>
                            <Label>Username</Label>
                            <Input />
                            <Label>Password</Label>
                            <Input type="password" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={() => this.setState({loginModalOpen: false})}>Submit</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <Dropdown direction="left" isOpen={this.state.hamburgerOpen} toggle={() => this.setState({hamburgerOpen: !this.state.hamburgerOpen})}>
                        <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={this.state.hamburgerOpen}>
                            <span className="material-icons hamburger-icon">menu</span>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.loginLogout}>{this.state.loginLogoutText}</DropdownItem>
                            <DropdownItem>Account</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
export default NavBar;