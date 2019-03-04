import React, { Component } from 'react';

import mockData from './mockJournalEntries';

export default function JournalData(WrappedComponent) {
  return class extends Component {
    state = {
      entries: []
    };

    componentDidMount() {
      this.setState({
        entries: mockData,
      })
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          {...this.state}
        />
      )
    }
  }
}