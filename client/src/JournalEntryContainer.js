import React, { Component } from 'react';
import JournalEntry from './JournalEntry';

export default class JournalEntryContainer extends Component {
  state = {
    date: '',
    score: 0,
    note: '',
    today: new Date(Date.now())
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    this.setState({ date: this.state.today.toISOString().slice(0, 10) });
    event.preventDefault();
  };

  render() {
    return (
      <JournalEntry
        note={this.state.note}
        date={this.state.today}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
