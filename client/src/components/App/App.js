import React, { Component, Fragment } from 'react';
import Header from '../Header/Header'
import JournalEntryData from '../../containers/JournalEntryData/JournalEntryData';
import JournalEntryForm from '../JournalEntryForm/JournalEntryForm';

import './App.css';

const JournalEntryFormWithData = JournalEntryData(JournalEntryForm);

class App extends Component {
  state = {
    loggedIn: false,
    googleId: '',
  };

  login = id => {
    this.setState({
      loggedIn: true,
      googleId: id,
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      googleId: '',
    })
  }

  render() {
    return (
      <Fragment>
        <Header {...this.state} login={this.login} logout={this.logout} />
        <br />
        {this.state.loggedIn ? 
          <JournalEntryFormWithData /> :
          <h2>Welcome, login with Google above to begin.</h2>
        }
      </Fragment>
    );
  }
}

export default App;
