import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus, faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
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
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <span className="specificitygoogle"><a href="http://google.com/+"><FontAwesomeIcon icon={faGooglePlus} className="mr-2" /></a></span>
                            <span className="specificityfacebook"><a href="http://www.facebook.com/profile.php?id="><FontAwesomeIcon icon={faFacebook} className="mr-2" /></a></span>
                            <span className="specificitylinkedin"><a href="http://www.linkedin.com/in/"><FontAwesomeIcon icon={faLinkedin} className="mr-2" /></a></span>
                            <span className="specificitytwitter"><a href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="mr-2" /></a></span>
                            <span className="specificityyoutube"><a href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube} className="mr-2" /></a></span>
                            <span className="specificityenvelop"><a href="mailto:"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /></a></span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
