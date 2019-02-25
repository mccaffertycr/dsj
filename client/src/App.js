import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import JournalEntryContainer from './JournalEntryContainer';
import './App.css';

const responseGoogle = response => {
  console.log(response);
};

class App extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <div className="app-container">
        <GoogleLogin
          clientId="823874883179-9n9lgjfc50ds6kj9eqkmhtddhid2hb6f.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={() => this.setState({ loggedIn: true })}
          onFailure={responseGoogle}
        />
        <br />
        <JournalEntryContainer />
      </div>
    );
  }
}

export default App;
