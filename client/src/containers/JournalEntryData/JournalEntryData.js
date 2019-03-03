import React, { Component } from 'react';

export default function JournalEntryData(WrappedComponent) {
  return class extends Component {
    state = {
      date: '',
      score: 0,
      note: '',
      today: new Date(Date.now())
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit = e => {
      this.setState({ date: this.state.today.toISOString().slice(0, 10) });
      e.preventDefault();
    }

    render() {
      return (
        <WrappedComponent 
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}