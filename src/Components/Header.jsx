import React from 'react'
import { Button } from 'react-bootstrap';
import './Header.scss'
import Menu from './Menu'


function Header() {
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
                                <Button variant="warning" size="lg" block>Reserve Table</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
