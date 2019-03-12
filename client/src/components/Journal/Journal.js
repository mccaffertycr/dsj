import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import JournalInfo from '../JournalInfo/JournalInfo';
import CalendarHeatMap from '../CalendarHeatmap/CalendarHeatmap';
import JournalEntryData from '../../containers/JournalEntryData/JournalEntryData';
import JournalEntryForm from '../JournalEntryForm/JournalEntryForm';

import './journal.css';

const JournalEntryFormWithData = JournalEntryData(JournalEntryForm);

class Journal extends PureComponent {

  getLastEntry(entries) {
    if (entries.length) return new Date(entries[entries.length - 1].date);
    else return null;
  }

  render() {
    const { googleId, name, entries, today, darkModeOn, darkMode } = this.props;
    const lastEntryDate = this.getLastEntry(entries);

    return (
      <div className="journal-container">
        <JournalInfo name={name} today={today} lastEntryDate={lastEntryDate} />
        <JournalEntryFormWithData googleId={googleId} today={today} lastEntryDate={lastEntryDate} />
        <DarkModeToggle darkModeOn={darkModeOn} darkMode={darkMode} />
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
  today: PropTypes.instanceOf(Date),
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
  today: new Date(Date.now()),
  entries: [],
}