import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Button, Form, Modal, Nav, Navbar } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import "./Menu.scss"
import { faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'


function Menu() {
    const [show, setShow] = useState(false);
    return (
        <Navbar expand="lg" className="navbar-dark" fixed="top">
            <div className="container">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Link to="/">
                        <Navbar.Brand> <img src="img/logo.png" height="30" width="41" alt="logo" /></Navbar.Brand>
                    </Link>
                    <Nav >
                        <Nav.Link as={Link} to="/" className="nav-item"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-item"><FontAwesomeIcon icon={faInfo} className="mr-2" />About</Nav.Link>
                        <Nav.Link as={Link} to="/menu" className="nav-item"><FontAwesomeIcon icon={faList} className="mr-2" />Menu</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-item"><FontAwesomeIcon icon={faAddressCard} className="mr-2" />Contact</Nav.Link>
                    </Nav >
                    <div className="d-flex loginmodal" style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                        <Button onClick={() => setShow(true)}>
                            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
                        </Button>
                    </div>
                    <Modal
                        className="login"
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton className="reserveatble">
                            <Modal.Title id="example-custom-modal-styling-title">
                                Login
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalbody">
                            <Form>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Control type="password" placeholder="Password" />
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="secondary" type="submit" className="btn-sm ml-auto" onClick={() => setShow(false)}>
                                        Cancel
                                        </Button>
                                    <Button variant="primary" type="submit" className="btn-sm ml-1" onClick={() => setShow(false)}>
                                        Sign in
                                        </Button>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}

export default Menu; 
