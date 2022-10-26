import React from 'react';
import { Link } from 'react-router-dom';
import logoos from '../logoos.jpg';

const Navbar = () => {
  return (
    <nav>
      <img src={logoos} alt="cock-logo" className="logo" />
      <ul className="nav-elements">
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/about" className="nav-element">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
