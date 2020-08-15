import React from 'react';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <h2>React-Router</h2>
      

      <NavLink exact activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeClassName="active" to="/contact">Contact</NavLink>

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
