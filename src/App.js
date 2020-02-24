import React from 'react';
import './App.css';
import Nav from './Nav';
import Nature from './Nature';
import Lakes from './Lakes';
import Animals from './Animal';
import Forest from './Forest';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App"> 
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/nature" component={Nature} />
          <Route path="/lakes" component={Lakes} />
          <Route path="/animals" component={Animals} />
           <Route path="/forest" component={Forest} />
        </Switch>
      </div>
    </Router> 
  );
}

const Home = () => (
  <div>
    <h1>Categories Page</h1>
  </div>
)

export default App;
