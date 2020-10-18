import React from 'react'
import './Container.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'


function Container() {
    return (
        <Switch>
            <Route exact path="/">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-4">
                                <h3>Our main page</h3>
                                <hr />
                            </div >
                        </div>

                        <div className="row row-content align-items-center">
                            <div className="col-12 col-sm-6">
                                <h2>Our History</h2>
                                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                            </div>
                        </div>
                        <div className="row row-content align-items-center ">
                            <div className="col-12">
                                <h2>Corporate Leadership</h2>
                                <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                                <p className="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
                                <h3>Dhanasekaran Witherspoon <small>Chief Food Officer</small></h3>
                                <p className="d-none d-sm-block">Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                                <h3>Agumbe Tang <small>Chief Taste Officer</small></h3>
                                <p className="d-none d-sm-block">Blessed with the most discerning gustatory sense, Agumbe, our CTO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, <em>You click only if you survive my lick.</em></p>
                                <h3>Alberto Somayya <small>Executive Chef</small></h3>
                                <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="/about">
                <div>
                    <div className="container">
                        <div className="row">
                            <ol class="col-12 breadcrumb">
                                <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li class="breadcrumb-item active">About Us</li>
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
                        </div>
                        <div className="row row-content align-items-center ">
                            <div className="col-12">
                                <h2>Corporate Leadership</h2>
                                <h3>Peter Pan <small>Chief Epicurious Officer</small></h3>
                                <p className="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
                                <h3>Dhanasekaran Witherspoon <small>Chief Food Officer</small></h3>
                                <p className="d-none d-sm-block">Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                                <h3>Agumbe Tang <small>Chief Taste Officer</small></h3>
                                <p className="d-none d-sm-block">Blessed with the most discerning gustatory sense, Agumbe, our CTO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, <em>You click only if you survive my lick.</em></p>
                                <h3>Alberto Somayya <small>Executive Chef</small></h3>
                                <p className="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!</em></p>
                            </div>
                        </div>
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
                                    <a role="button" class="btn btn-primary" href="tel:+85212345678"><FontAwesomeIcon icon={faPhone} className="mr-2" /> Call</a>
                                    <a role="button" class="btn btn-info"><FontAwesomeIcon icon={faSkype} className="mr-2" /> Skype</a>
                                    <a role="button" class="btn btn-success" href="mailto:confusion@food.net"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email</a>
                                </div>
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col-12">
                                <h3>Send us your Feedback</h3>
                            </div>
                            <div className="col-12 col-md-9">
                                Form goes here
            </div>
                            <div className="col-12 col-md">
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
        </Switch>
    )
}

export default Container;
