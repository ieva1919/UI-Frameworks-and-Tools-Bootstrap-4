import React from 'react'
import './Footer.scss'


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>It is my  footer</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>The standard chunk of <br />Lorem Ipsum used since<br /> the 1500s is reproduced below <br />for those interested.<br /> the 1500s is reproduced
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a href="#">Google</a>
                            <a href="#">Twiter</a>
                            <a href="#">Facebook</a>
                            <a href="#">Linkedin</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>Copyright 2020</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;
