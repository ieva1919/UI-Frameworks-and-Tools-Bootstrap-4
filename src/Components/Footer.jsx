import React from 'react'
import './Footer.scss'


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
                                        Tel.: +852 1234 5678<br />
                                            Fax: +852 8765 4321<br />
                                                Email: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a href="http://google.com/+">Google+</a>
                            <a href="http://www.facebook.com/profile.php?id=">Facebook</a>
                            <a href="http://www.linkedin.com/in/">LinkedIn</a>
                            <a href="http://twitter.com/">Twitter</a>
                            <a href="http://youtube.com/">YouTube</a>
                            <a href="mailto:">Mail</a>
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
