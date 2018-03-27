import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Map from '../Map/Map';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="App">
          <ul className="App-header">
            <li>
              <a href="#home">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="#map">
                <Link to="/map">Map</Link>
              </a>
            </li>
            <li>
              <a href="#about">
                <Link to="/about">About</Link>
              </a>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Nav} />
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
