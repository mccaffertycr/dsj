import React, { Component } from 'react';

import { getEmojiScore } from './helpers.js';
import api from '../../utils/api';

export default function JournalEntryData(WrappedComponent) {
  return class extends Component {
    state = {
      score: 0,
      note: '',
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit = e => {
      const { googleId, today, getJournalEntries } = this.props;
      const journalEntry = {
        date: today.toISOString().slice(0, 10),
        score: this.state.score,
        emojiScore: getEmojiScore(parseInt(this.state.score)), 
        note: this.state.note
      }
      api
        .submitJournalEntry(googleId, journalEntry)
        .then(res => {
          if (res.status === 200) console.log(res.data);
          this.setState({
            score: 0,
            note: '',
          })
          getJournalEntries();
        })
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



