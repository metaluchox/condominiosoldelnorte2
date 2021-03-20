import React from 'react';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavbarScreen = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" >
                <Navbar.Brand as={Link} to="/">
                    <h2>Condominio Sol del Norte 2 <i className="bi bi-brightness-alt-high "/></h2>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/"><h5>
                        <i class="bi bi-house"></i> Inicio</h5></Nav.Link>
                        <Nav.Link as={Link} to="/news"><h5>
                        <i class="bi bi-newspaper"></i> Noticias</h5>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/gastoComun"><h5>
                        <i class="bi bi-cash-stack"></i> Gasto Común</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}