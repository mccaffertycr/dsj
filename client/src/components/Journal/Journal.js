import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CalendarHeatMap from '../CalendarHeatmap/CalendarHeatmap';
import JournalEntryData from '../../containers/JournalEntryData/JournalEntryData';
import JournalEntryForm from '../JournalEntryForm/JournalEntryForm';

import './journal.css';

const JournalEntryFormWithData = JournalEntryData(JournalEntryForm);

class Journal extends PureComponent {

  render() {
    const { googleId, name, entries } = this.props;
    return (
      <div className="journal">
        <h1>Hi, {name}</h1>
        <JournalEntryFormWithData googleId={googleId} />
        <CalendarHeatMap entries={entries} />
      </div>
    )
  }
}

export default Journal;

Journal.propTypes = {
  loggedIn: PropTypes.bool,
  googleId: PropTypes.string,
  name: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.num,
      date: PropTypes.string,
    })
  ),
}

Journal.defaultProps = {
  loggedIn: true,
  name: '',
  entries: [],
}