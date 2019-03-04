import React, { Component } from 'react';

export default function JournalData(WrappedComponent) {
  return class extends Component {
    state = {
      googleId: '',
      entries: []
    };

    componentDidMount() {

    }

    render() {
      return (
        <WrappedComponent 
          {...this.state}
        />
      )
    }
  }
}