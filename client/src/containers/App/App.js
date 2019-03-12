import React, { Component, Fragment } from 'react';

import Header from '../../components/Header/Header'
import JournalData from '../JournalData/JournalData';
import Journal from '../../components/Journal/Journal';

import api from '../../utils/api';

import './App.css';

const JournalWithData = JournalData(Journal);

class App extends Component {
  state = {
    darkModeOn: false,
    loggedIn: false,
    googleId: '',
    name: '',
  };

  componentDidMount() {
    document.getElementById('app-container').classList.add('light');
  }

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

  darkMode = e => {
    const appContainer = document.getElementById('app-container');
    if (this.state.darkModeOn) {
      appContainer.classList.remove('dark');
      appContainer.classList.add('light');
      this.setState({ darkModeOn: false})
    } else {
      appContainer.classList.remove('light');
      appContainer.classList.add('dark');
      this.setState({ darkModeOn: true });
    }
  } 

  render() {
    return (
      <Fragment>
        <Header loggedIn={this.state.loggedIn} login={this.login} logout={this.logout} />
        <br />
        {this.state.loggedIn ? 
          <JournalWithData {...this.state} darkMode={this.darkMode} /> :
          <h2>Welcome, login with Google above to begin.</h2>
        }
      </Fragment>
    );
  }
}

export default App;
