import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navstyle = {
        color: 'white'
    };

  return (
        <nav>
            <h3>Video Application</h3>
            <ul className = "nav-links">
                <Link style={navstyle} to="/nature"><li>Nature</li></Link>
                <Link style={navstyle} to="/lakes"><li>Lakes</li></Link>
                <Link style={navstyle} to="/animals"><li>Animals</li></Link>
                <Link style={navstyle} to="/forest"><li>Forest</li></Link>
            </ul>
        </nav>
  );
}

export default Nav;
