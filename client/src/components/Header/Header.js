import React from 'react';
import Login from '../Login/Login';

import './header.css'

const Header = props => (
  <nav className="nav">
    <h2>Daily Sentiment Journal</h2>
    <Login {...props} />
  </nav>
)

export default Header;