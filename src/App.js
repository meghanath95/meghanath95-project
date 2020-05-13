import React from 'react';
import './App.css';
import Nav from './Nav';
import Nature from './Youtube_Video/Nature_video';
import Lakes from './Youtube_Video/Lake_video';
import Animals from './Youtube_Video/Animals_video';
import Forest from './Youtube_Video/Forests_video';
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
