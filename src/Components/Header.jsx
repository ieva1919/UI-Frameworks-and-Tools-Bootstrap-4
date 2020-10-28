import React, { useState } from 'react'
import { Button, Col, Row, Form, Modal, ButtonGroup } from 'react-bootstrap';
import './Header.scss'
import Menu from './Menu'


function Header() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Menu />
            <header className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                        <div className="col-12 col-sm-3 align-self-center">
                            <img src="img/logo.png" alt="logo" className="img-fluid" />
                        </div>
                        <div className="col-12 col-sm-3 align-self-center">
                            <a href="#reservetable">
                                <Button variant="warning" size="lg" onClick={() => setShow(true)}>
                                    Reserve Table
                                </Button>
                            </a>
                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        Reserve a table
                        </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group as={Row} className="my-4">
                                            <Form.Label column sm={3}>Number of Guest</Form.Label>
                                            <Col sm={9}>
                                                {['radio'].map((type) => (
                                                    <div key={`inline-${type}`} className="mb-3">
                                                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                                                        <Form.Check inline label="2" type={type} id={`inline-${type}-1`} />
                                                        <Form.Check inline label="3" type={type} id={`inline-${type}-1`} />
                                                        <Form.Check inline label="4" type={type} id={`inline-${type}-1`} />
                                                        <Form.Check inline label="5" type={type} id={`inline-${type}-1`} />
                                                        <Form.Check inline label="6" type={type} id={`inline-${type}-1`} />
                                                    </div>
                                                ))}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group className="row">
                                            <Form.Label column sm={3}>Section</Form.Label>
                                            <Col sm={9}>
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="success">Non-Smoking</Button>
                                                    <Button variant="danger">Smoking</Button>
                                                </ButtonGroup>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="my-4">
                                            <Form.Label column sm={3}>Date and Time</Form.Label>
                                            <Col sm={5}>
                                                <Form.Control type="date" name="date" placeholder="Date" />
                                            </Col>
                                            <Col sm={4}>
                                                <Form.Control type="number" name="time" placeholder="Time" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group className="row">
                                            <div className="offset-md-3 col-md-10">
                                                <Button variant="secondary" type="submit" className="btn-sm ml-auto" onClick={() => setShow(false)}>
                                                    Cancel
                                                </Button>
                                                <Button variant="primary" type="submit" className="btn-sm ml-1" onClick={() => setShow(false)}>
                                                    Reserve
                                                </Button>
                                            </div>
                                        </Form.Group >
                                    </Form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
