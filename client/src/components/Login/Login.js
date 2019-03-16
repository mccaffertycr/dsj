import React from 'react';
import PropTypes from 'prop-types';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

const Login = ({loggedIn, login, logout}) => {
  const responseGoogle = response => {
    login(response.googleId, response.profileObj.email, response.profileObj.givenName);
  };

  return (
    <>
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
    </>
  )
}

export default Login;

Login.propTypes = {
  loggedIn: PropTypes.bool,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

Login.defaultProps = {
  loggedIn: false,
}