import React from 'react';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavbarScreen = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <h2>Condominio Sol del Norte 2 <i className="bi bi-brightness-alt-high"/></h2>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Información" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Inicio</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/news">Noticias</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/gastoComun">Gasto Común</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}