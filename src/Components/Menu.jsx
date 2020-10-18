import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import "./Menu.scss"
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'



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
                        <Link className="nav-link" to="/"><Nav.Link className="nav-item"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</Nav.Link></Link>
                        <Link className="nav-link" to="/about"><Nav.Link className="nav-item"><FontAwesomeIcon icon={faInfo} className="mr-2" />About</Nav.Link></Link>
                        <Link className="nav-link" to="/menu"><Nav.Link className="nav-item"><FontAwesomeIcon icon={faList} className="mr-2" />Menu</Nav.Link></Link>
                        <Link className="nav-link" to="/contact"><Nav.Link className="nav-item"><FontAwesomeIcon icon={faAddressCard} className="mr-2" />Contact</Nav.Link></Link>
                    </Nav >
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}

export default Menu; 
