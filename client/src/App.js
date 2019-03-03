import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import JournalEntryData from './containers/JournalEntryData/JournalEntryData';
import JournalEntryForm from './components/JournalEntryForm/JournalEntryForm';
import './App.css';

const responseGoogle = response => {
  console.log(response);
};

const JournalEntryFormWithData = JournalEntryData(JournalEntryForm);

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
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br />
        <JournalEntryFormWithData />
      </div>
    );
  }
}

export default App;
