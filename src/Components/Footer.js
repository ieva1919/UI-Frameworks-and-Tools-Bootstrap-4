import React from 'react'


function Footer() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>It is my  heading</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Adress</h5>
                        <address>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested
                        </address>
                    </div>
                    <div className="col-12 col-sm-4">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Menu</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p>Copyright 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
