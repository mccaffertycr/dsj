import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const Login = ({loggedIn, login, logout}) => {
  const responseGoogle = response => {
    login(response.googleId, response.profileObj.givenName);
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