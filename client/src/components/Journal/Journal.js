import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import CalendarHeatMap from '../CalendarHeatmap/CalendarHeatmap';
import JournalEntryData from '../../containers/JournalEntryData/JournalEntryData';
import JournalEntryForm from '../JournalEntryForm/JournalEntryForm';

import './journal.css';

const JournalEntryFormWithData = JournalEntryData(JournalEntryForm);

class Journal extends PureComponent {

  render() {
    const { googleId, name, entries, darkModeOn, darkMode } = this.props;
    return (
      <div className="journal-container">
        <DarkModeToggle darkModeOn={darkModeOn} darkMode={darkMode}/>
        <h1>Hi, {name}</h1>
        <JournalEntryFormWithData googleId={googleId} />
        <CalendarHeatMap entries={entries} />
      </div>
    )
  }
}

export default Journal;

Journal.propTypes = {
  darkModeOn: PropTypes.bool,
  loggedIn: PropTypes.bool,
  googleId: PropTypes.string,
  name: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.num,
      date: PropTypes.string,
    })
  ),
  darkMode: PropTypes.func,
}

Journal.defaultProps = {
  darkModeOn: false,
  loggedIn: true,
  name: '',
  entries: [],
}