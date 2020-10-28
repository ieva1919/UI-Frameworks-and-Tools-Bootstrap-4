import React, { useState } from 'react'
import './Container.scss'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faFax, faEnvelope, faPauseCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import { Card, Col, Row, Form, Table, Tabs, Tab, Accordion, Button, Carousel } from 'react-bootstrap';


function Container() {
    const [show, setShow] = useState(false);

    return (
        <Switch>
            <Route exact path="/">
                <div>
                    <div className="margin">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <h3>Our main page</h3>
                                    <hr />
                                </div >
                            </div>
                            <div className="row row-content">
                                <div className="col">
                                    <Carousel interval={show ? 5000 : null} controls={false}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src="img/uthappizza.png"
                                                alt="uthappizza"
                                            />
                                            <div className="btn-group">
                                                <Button variant="danger" type="submit" className="btn-sm" onClick={() => setShow(false)}>
                                                    <span> <FontAwesomeIcon icon={faPauseCircle} /></span>
                                                </Button>
                                                <Button variant="danger" type="submit" className="btn-sm" onClick={() => setShow(true)}>
                                                    <span> <FontAwesomeIcon icon={faPlay} /></span>
                                                </Button>
                                            </div>
                                            <Carousel.Caption>
                                                <h2 className="mt-0">Uthappizza <span className="badge badge-danger">HOT</span><span className="badge badge-pill badge-secondary">$4.99</span></h2>
                                                <p className="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and
                                                Italian pizza, topped with Cerignola olives, ripe vine
                                                cherry tomatoes, Vidalia onion, Guntur chillies and
                            Buffalo Paneer.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src="img/alberto.png"
                                                alt="alberto"
                                            />
                                            <div className="btn-group">
                                                <Button variant="danger" type="submit" className="btn-sm" onClick={() => setShow(false)}>
                                                    <span> <FontAwesomeIcon icon={faPauseCircle} /></span>
                                                </Button>
                                                <Button variant="danger" type="submit" className="btn-sm" onClick={() => setShow(true)}>
                                                    <span> <FontAwesomeIcon icon={faPlay} /></span>
                                                </Button>
                                            </div>
                                            <Carousel.Caption>
                                                <h2 className="mt-0">Weekend grand buffet <span className="badge badge-danger">NEW</span></h2>
                                                <p className="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and
                                                Italian pizza, topped with Cerignola olives, ripe vine
                                                cherry tomatoes, Vidalia onion, Guntur chillies and
                            Buffalo Paneer.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block"
                                                src="img/buffet.png"
                                                alt="buffet"
                                            />
                                            <div className="btn-group">
                                                <Button variant="danger" type="submit" className="btn-sm" onClick={() => setShow(false)}>
                                                    <span> <FontAwesomeIcon icon={faPauseCircle} /></span>
                                                </Button>
                                                <Button variant="danger" type="submit" className="btn-sm" onClick={() => setShow(true)}>
                                                    <span> <FontAwesomeIcon icon={faPlay} /></span>
                                                </Button>
                                            </div>
                                            <Carousel.Caption>
                                                <h2 className="mt-0">Weekend grand buffet <span className="badge badge-danger">NEW</span></h2>
                                                <p className="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and
                                                Italian pizza, topped with Cerignola olives, ripe vine
                                                cherry tomatoes, Vidalia onion, Guntur chillies and
                            Buffalo Paneer.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="row row-content align-items-center">
                                    <div className="col-12 order-last col-sm-3">
                                        <h4>Our Lipsmaking Culinary Creation</h4>
                                    </div>
                                    <div className="col-12 order-first col-sm-9">
                                        <div className="media">
                                            <img className="d-flex mr-3 img-thumbnail align-self-center"
                                                src="img/uthappizza.png" alt="Uthappizza" />
                                            <div className="media-body">
                                                <h2 className="mt-0">Uthappizza <span className="badge badge-danger">HOT</span><span className="badge badge-pill badge-secondary">$4.99</span></h2>
                                                <p className="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and
                                                Italian pizza, topped with Cerignola olives, ripe vine
                                                cherry tomatoes, Vidalia onion, Guntur chillies and
                            Buffalo Paneer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-content align-items-center">
                                    <div className="col-12 col-sm-3">
                                        <h4>This Month's Promotions</h4>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <div className="media">
                                            <div className="media-body">
                                                <h2 className="mt-0">Weekend grand buffet <span className="badge badge-danger">NEW</span></h2>
                                                <p className="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and
                                                Italian pizza, topped with Cerignola olives, ripe vine
                                                cherry tomatoes, Vidalia onion, Guntur chillies and
                            Buffalo Paneer.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <img className="d-flex mr-3 img-thumbnail align-self-center"
                                            src="img/buffet.png" alt="buffet" />
                                    </div>
                                </div>
                                <div className="row row-content align-items-center">
                                    <div className="col-12 col-sm-3 order-last">
                                        <h4>Meet our culinary specialist</h4>
                                    </div>
                                    <div className="col-12 col-sm-9 order-first">
                                        <div className="media">
                                            <img className="d-flex mr-3 img-thumbnail align-self-center"
                                                src="img/alberto.png" alt="Alberto Somayya" />
                                            <div className="media-body">
                                                <h2 className="mt-0">Alberto Somayya</h2>
                                                <h4>Executive Chef</h4>
                                                <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide
                                                International experience having worked closely with
                                                whos-who in the culinary world, he specializes in
                                                creating mouthwatering Indo-Italian fusion experiences.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-content align-items-center ">
                                    <div className="col-12">
                                        <h2>Corporate Leadership</h2>
                                        <br />
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>
                                                        <br />
                                                        <p className="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                        <h3>Dhanasekaran Witherspoon <small>Chief Food Officer</small></h3>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        <br />
                                                        <p className="d-none d-sm-block">Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                                        <h3>Agumbe Tang <small>Chief Taste Officer</small></h3>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                        <br />
                                                        <p className="d-none d-sm-block">Blessed with the most discerning gustatory sense, Agumbe, our CTO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, <em>You click only if you survive my lick.</em></p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                                        <h3>Alberto Somayya <small>Executive Chef</small></h3>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body>
                                                        <br />
                                                        <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!</em></p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                </div>
                                <Card id="reservetable">
                                    <Card.Header className="warning"><strong>Reserve a Table </strong></Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group as={Row} className="my-4">
                                                <Form.Label column sm={2}>Number of Guest</Form.Label>
                                                <Col sm={10}>
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
                                            <Form.Group as={Row} className="my-4">
                                                <Form.Label column sm={2}>Date and Time</Form.Label>
                                                <Col sm={2}>
                                                    <Form.Control type="date" name="date" placeholder="Date" />
                                                </Col>
                                                <Col sm={2}>
                                                    <Form.Control type="number" name="time" placeholder="Time" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group className="row">
                                                <div className="offset-md-2 col-md-10">
                                                    <button type="submit" className="btn btn-primary">Reserve</button>
                                                </div>
                                            </Form.Group>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Route >
            <Route path="/about">
                <div>
                    <div className="container">
                        <div className="row">
                            <ol className="col-12 breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">About Us</li>
                            </ol>
                            <div className="col-12 col-sm-4">
                                <h3>About Us</h3>
                                <hr />
                            </div >
                        </div>
                        <div className="row row-content align-items-center">
                            <div className="col-12 col-sm-6">
                                <h2>Our History</h2>
                                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <Card >
                                    <h3 className="card-header bg-primary text-white">Facts At a Glance</h3>
                                    <div className="card-body">
                                        <dl className="row">
                                            <dt className="col-6">Started</dt>
                                            <dd className="col-6">3 Feb. 2013</dd>
                                            <dt className="col-6">Major Stake Holder</dt>
                                            <dd className="col-6">HK Fine Foods Inc.</dd>
                                            <dt className="col-6">Last Year's Turnover</dt>
                                            <dd className="col-6">$1,250,375</dd>
                                            <dt className="col-6">Employees</dt>
                                            <dd className="col-6">40</dd>
                                        </dl>
                                    </div>
                                </Card >
                            </div>
                            <Card className="col-12">
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {' '}
                                            You better cut the pizza in four pieces because I'm not hungry enough to eat six.{' '}
                                        </p>
                                        <footer className="blockquote-footer">Yogi Berra,
                            <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                            P. Pepe, Diversion Books, 2014</cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="row row-content align-items-center ">
                            <div className="col-12">
                                <h2>Corporate Leadership</h2>
                                <Tabs defaultActiveKey="peter">
                                    <Tab eventKey="peter" title="Peter Pan, CEO" >
                                        <br />
                                        <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                                        <p className="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
                                    </Tab>
                                    <Tab eventKey="danny" title="Danny Witherspoon, CFO">
                                        <br />
                                        <h3>Dhanasekaran Witherspoon <small>Chief Food Officer</small></h3>
                                        <p className="d-none d-sm-block">Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                                    </Tab>
                                    <Tab eventKey="agumbe" title="Agumbe Tang, CTO">
                                        <br />
                                        <h3>Agumbe Tang <small>Chief Taste Officer</small></h3>
                                        <p className="d-none d-sm-block">Blessed with the most discerning gustatory sense, Agumbe, our CTO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, <em>You click only if you survive my lick.</em></p>
                                    </Tab>
                                    <Tab eventKey="alberto" title="Alberto Somayya, Exec. Chef">
                                        <br />
                                        <h3>Alberto Somayya <small>Executive Chef</small></h3>
                                        <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!</em></p>
                                    </Tab>
                                </Tabs>
                                <br />
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col-12 col-sm-9">
                                <h2>Facts &amp; Figures</h2>
                            </div>
                            <div className="col-12 col-sm-3">
                            </div>
                        </div>
                        <Table striped bordered hover responsive>
                            <thead className="thead-dark">
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>2013</th>
                                    <th>2014</th>
                                    <th>2015</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Employees</th>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <th>Guests Served</th>
                                    <td>15000</td>
                                    <td>45000</td>
                                    <td>100,000</td>
                                </tr>
                                <tr>
                                    <th>Special Events</th>
                                    <td>3</td>
                                    <td>20</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <th>Annual Turnover</th>
                                    <td>$251,325</td>
                                    <td>$1,250,375</td>
                                    <td>~$3,000,000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Route>
            <Route path="/menu">
                {/* <Menu /> */}
            </Route>
            <Route path="/contact">
                <div>
                    <div className="container">
                        <div className="row">
                            <ol className="col-12 breadcrumb">
                                <li className="breadcrumb-item"><a href="/home">Home</a></li>
                                <li className="breadcrumb-item active">Contact Us</li>
                            </ol>
                            <div className="col-12">
                                <h3>Contact Us</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col-12">
                                <h3>Location Information</h3>
                            </div>
                            <div className="col-12 col-sm-4 offset-sm-1">
                                <h5>Our Address</h5>
                                <address>
                                    121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                    HONG KONG<br />
                                    <FontAwesomeIcon icon={faPhone} className="mr-2" /> +852 1234 5678<br />
                                    <FontAwesomeIcon icon={faFax} className="mr-2" />  +852 8765 4321<br />
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />  <a href="mailto:confusion@food.net">confusion@food.net</a>
                                </address>
                            </div>
                            <div className="col-12 col-sm-6 offset-sm-1">
                                <h5>Map of our Location</h5>
                            </div>
                            <div className="col-12 col-sm-11 offset-sm-1">
                                <div className="btn-group" role="group">
                                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><FontAwesomeIcon icon={faPhone} className="mr-2" /> Call</a>
                                    <a role="button" className="btn btn-info"><FontAwesomeIcon icon={faSkype} className="mr-2" /> Skype</a>
                                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email</a>
                                </div>
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col-12">
                                <h3>Send us your Feedback</h3>
                            </div>
                            <div className="col-12 col-md-9">
                                <Form>
                                    <Form.Group controlId="firstname" className="row">
                                        <Form.Label for="firstname" className="col-md-2 col-form-label">First Name</Form.Label>
                                        <div className="col-md-10">
                                            <Form.Control type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="lastname" className="row">
                                        <Form.Label for="lastname" className="col-md-2 col-form-label">Last Name</Form.Label>
                                        <div className="col-md-10">
                                            <Form.Control type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                                        </div>
                                    </Form.Group >
                                    <Form.Group controlId="telnum" className="row">
                                        <Form.Label for="telnum" className="col-12 col-md-2 col-form-label">Contact Tel.</Form.Label>
                                        <div className="col-5 col-md-3">
                                            <Form.Control type="tel" className="form-control" id="areacode" name="areacode" placeholder="Area code" />
                                        </div>
                                        <div className="col-7 col-md-7">
                                            <Form.Control type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. number" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="telnum" className="row">
                                        <Form.Label for="emailid" className="col-md-2 col-form-label"> Email</Form.Label>
                                        <div className="col-md-10">
                                            <Form.Control type="email" className="form-control" id="emailid" name="emailid" placeholder="Email" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <div className="col-md-6 offset-md-2">
                                            <div className="form-check">
                                                <Form.Control type="checkbox" className="form-check-input" name="approve" id="approve" value="" />
                                                <Form.Label className="form-check-label" for="approve">
                                                    <strong>May we contact you?</strong>
                                                </Form.Label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 offset-md-1">
                                            <Form.Control as="select">
                                                <option>Tel.</option>
                                                <option>Email</option>
                                            </Form.Control>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <Form.Label for="feedback" className="col-md-2 col-form-label">Your Feedback</Form.Label>
                                        <div className="col-md-10">
                                            <Form.Control as="textarea" className="form-control" id="feedback" name="feedback" rows="12"></Form.Control>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <div className="offset-md-2 col-md-10">
                                            <button type="submit" className="btn btn-primary">Send Feedback</button>
                                        </div>
                                    </Form.Group >
                                </Form>
                            </div>
                            <div className="col-12 col-md">
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
        </Switch >
    )
}

export default Container;
