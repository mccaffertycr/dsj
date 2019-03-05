import React, { Component, Fragment } from 'react';

import Header from '../Header/Header'
import JournalData from '../../containers/JournalData/JournalData';
import Journal from '../Journal/Journal';

import api from '../../utils/api';

import './App.css';

const JournalWithData = JournalData(Journal);

class App extends Component {
  state = {
    loggedIn: false,
    googleId: '',
    name: '',
  };

  login = (id, name) => {
    this.setState({
      loggedIn: true,
      googleId: id,
      name: name,
    })
    api.registerJournal(id).then((res, err) => {
      if (err) throw err;
      else console.log(res);
    })
      
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      googleId: '',
      name: '',
    })
  }

  render() {
    return (
      <Fragment>
        <Header {...this.state} login={this.login} logout={this.logout} />
        <br />
        {this.state.loggedIn ? 
          <JournalWithData {...this.state} /> :
          <h2>Welcome, login with Google above to begin.</h2>
        }
      </Fragment>
    );
  }
}

export default App;
