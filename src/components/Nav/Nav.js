import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="Nav">
    <h1>Welcome to the best reality service</h1>
    <Link to="/map">
      <button className="btn">Map</button>
    </Link>
    <Link to="/about">
      <button className="btn">About</button>
    </Link>
  </div>
);

export default Nav;
