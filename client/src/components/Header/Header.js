import React from 'react';
import PropTypes from 'prop-types';

import Login from '../Login/Login';

import './header.css'

const Header = props => (
  <nav className="nav">
    <h2>Daily Sentiment Journal</h2>
    <Login {...props} />
  </nav>
)

export default Header;

Header.propTypes = {
  loggedIn: PropTypes.bool,
  googleId: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

Header.defaultProps = {
  loggedIn: false,
  googleId: '',
  name: '',
}