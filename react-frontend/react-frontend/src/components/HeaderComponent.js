import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        if (window.location.pathname === "/") {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-md navbar-dark bg-color" expand="lg">
                    <Container>
                        <Navbar.Brand >Employee Management App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={this.handleClick} href="/employees">Go to Employee List Page</Nav.Link>
                                <Nav.Link onClick={this.handleClick} href="/about">About</Nav.Link>
                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={this.handleClick} href="/welcome">Welcome</NavDropdown.Item>
                                    <NavDropdown.Item onClick={this.handleClick} href="/">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default HeaderComponent
