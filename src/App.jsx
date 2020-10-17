import React from 'react';
import './App.scss';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Container from './Components/Container'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Header />
      <Container />
      <Footer />
    </Router>
  );
}

export default App;