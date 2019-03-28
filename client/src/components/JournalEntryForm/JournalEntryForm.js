import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './journalentryform.css';

const JournalEntry = ({ note, today, handleChange, handleSubmit }) => {
  const labels = ['--', '-', '0', '+', '++'];
  const values = [-2, -1, 0, 1, 2];

  return (
    <form>
      <div className="journal-entry-form">
      <h2 className="journal-entry-header">
        <span role="img" aria-label="notebook">📓</span> New Entry
      </h2>
        <div className="radio-container">
          {values.map(v => {
            return (
              <Fragment key={v}>
                <input
                  type="radio"
                  name="score"
                  onChange={handleChange}
                  value={v}
                />
                <label htmlFor="score">
                  {labels[values.indexOf(v)]}
                </label>
              </Fragment>
            );
          })}
        </div>
        <textarea rows={6} name="note" className="journal-entry-note" placeholder="Add a note (Optional)" onChange={handleChange} value={note} />
        <button className="journal-entry-form-submit" type="submit" onClick={handleSubmit}>submit</button>
      </div>
    </form>
  );
};

export default JournalEntry;

JournalEntry.propTypes = {
  note: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getJournalEntries: PropTypes.func.isRequired,
}

JournalEntry.defaultProps = {
  note: '',
}