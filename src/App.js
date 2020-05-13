import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Nav = (props) => (
  <DynamicImport load={() => import('./Nav')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Lakes = (props) => (
  <DynamicImport load={() => import('./Lakes')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Nature = (props) => (
  <DynamicImport load={() => import('./Nature')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Forest = (props) => (
  <DynamicImport load={() => import('./Forest')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Animals = (props) => (
  <DynamicImport load={() => import('./Animal')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

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

// import React from 'react';
// import './App.css';
// import Nav from './Nav';
// import Nature from './Youtube_Video/Nature_video';
// import Lakes from './Youtube_Video/Lake_video';
// import Animals from './Youtube_Video/Animals_video';
// import Forest from './Youtube_Video/Forests_video';
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';