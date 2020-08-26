import React from 'react';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import NotFound from './NotFound';
import {Jumbotron, Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Container className="mt-4 p-3">
        <Jumbotron>
        <h1 className="center">Welcome to React-Router!</h1>
        </Jumbotron>
      </Container>
      
      

      <Navbar bg="info" variant="dark">
        <Nav className="ml-auto">
          <NavItem>
            <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
  

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>

    </div>
    </Router>
  )
}

export default App;
