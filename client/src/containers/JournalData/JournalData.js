import React, { Component } from 'react';

import api from '../../utils/api';

export default function JournalData(WrappedComponent) {
  return class extends Component {
    state = {
      entries: [],
      today: new Date(Date.now()),
    };

    componentDidMount() {
      this.getJournalEntries();
    }

    getJournalEntries = () => {
      const { googleId } = this.props;
      api
      .getJournalEntries(googleId)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            entries: res.data,
          })
        }
      })
    }

    render() {
      return (
        <WrappedComponent
          getJournalEntries={this.getJournalEntries}
          {...this.props}
          {...this.state}
        />
      )
    }
  }
}