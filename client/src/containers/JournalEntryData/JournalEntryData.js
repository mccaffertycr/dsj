import React, { Component } from 'react';
import { getEmojiScore } from './helpers.js';

export default function JournalEntryData(WrappedComponent) {
  return class extends Component {
    state = {
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
      const { googleId } = this.props;
      const journalEntry = {
        date: this.state.today.toISOString().slice(0, 10),
        score: this.state.score,
        emojiScore: getEmojiScore(parseInt(this.state.score)), 
        note: this.state.note
      }
      console.log(googleId, journalEntry);
      e.preventDefault();
    }

    render() {
      return (
        <WrappedComponent 
          {...this.state}
          {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}



