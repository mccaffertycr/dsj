import React from 'react';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';

import './journalinfo.css'

const JournalInfo = ({ name, today, lastEntryDate }) => {
  return (
    <div className="journal-info-container">
      <h2 className="journal-info-header">
        <span role="img" aria-label="alarm">⏰</span> Welcome, {name}</h2>
      <Clock         
        date={`${today}`}
        format={'dddd, MMMM Do - h:mm:ss A'}
        ticking={true}
        />
      {
        today > lastEntryDate && lastEntryDate ? 
          <p>Your last entry was {lastEntryDate.toDateString()}</p> :
          <p>You already made an entry today.</p>
      }
    </div>
  )
}

export default JournalInfo;

JournalInfo.propTypes = {
  name: PropTypes.string,
  today: PropTypes.instanceOf(Date),
  lastEntry: PropTypes.instanceOf(Date)
}