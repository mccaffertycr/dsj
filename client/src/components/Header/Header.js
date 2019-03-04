import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import './header.css'

const Header = ({loggedIn, login, logout}) => {
  const responseGoogle = response => {
    console.log(response)
    login(response.googleId)
  };

  return (
    <nav className="nav">
      <h2>Daily Sentiment Journal</h2>
      {!loggedIn ? 
        <GoogleLogin
          clientId="823874883179-9n9lgjfc50ds6kj9eqkmhtddhid2hb6f.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
          <span>Login with Google</span>
        </GoogleLogin> :
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      }
    </nav>
  )
}

export default Header;