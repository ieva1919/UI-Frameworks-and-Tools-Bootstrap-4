import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


function Menu() {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <a className="navbar-brand mr-auto" href="#"> Ristorante Con Furion</a>
                <div className="collapse navbar-collapse" id="Navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                    </ul>
                    {/* <Router>
                        <Switch>
                            <Route path="/home">
                                {/* <Home /> */}
                    {/* </Route>
                            <Route path="/about"> */}
                    {/* <About /> */}
                    {/* </Route>
                            <Route path="/menu"> */}
                    {/* <Menu /> */}
                    {/* </Route>
                            <Route path="/contact"> */}
                    {/* <Contact /> */}
                    {/* </Route>
                        </Switch>
                    </Router> */}
                </div>
            </div>
        </nav>
    )
}

export default Menu; 
