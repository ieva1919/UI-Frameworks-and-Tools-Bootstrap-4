import React, { useRef, useState } from 'react'
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import './Header.scss'
import Menu from './Menu'


function Header() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

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
                            <img src="img/logo.png" className="img-fluid" />
                        </div>
                        <div className="col-12 col-sm-3 align-self-center">
                            <a href="#reservetable">
                                <Button variant="warning" size="lg" block ref={target} onClick={() => setShow(!show)}>
                                    Reserve Table
                                </Button>
                                <Overlay target={target.current} show={show} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Or Call us at  <br /><strong>+852 12345678</strong>
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
