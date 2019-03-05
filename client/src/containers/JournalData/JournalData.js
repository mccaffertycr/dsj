import React, { Component } from 'react';

import api from '../../utils/api';

// import mockData from './mockJournalEntries';

export default function JournalData(WrappedComponent) {
  return class extends Component {
    state = {
      entries: []
    };

    componentDidMount() {
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
          {...this.props}
          {...this.state}
        />
      )
    }
  }
}