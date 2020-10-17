import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import "./Menu.scss"


function Menu() {
    return (
        <Navbar expand="lg" className="navbar-dark">
            <div className="container">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Link to="/">
                        <Navbar.Brand> Ristorante Con Furion</Navbar.Brand>
                    </Link>
                    <Nav >
                        <Nav.Link className="nav-item "><Link className="nav-link" to="/home">Home</Link></Nav.Link>
                        <Nav.Link className="nav-item"><Link className="nav-link" to="/about">About</Link></Nav.Link>
                        <Nav.Link className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></Nav.Link>
                        <Nav.Link className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></Nav.Link>
                    </Nav >
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}

export default Menu; 
