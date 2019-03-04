import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const JournalEntry = ({ note, today, handleChange, handleSubmit }) => {
  const labels = ['--', '-', '0', '+', '++'];
  // const emojis = ['😢', '🙁', '😐', '🙂', '😄'];
  const values = [-2, -1, 0, 1, 2];

  return (
    <form>
      <p>{today.toDateString()}</p>
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
      <br />
      <label htmlFor="note">Note: </label>
      <input type="text" name="note" onChange={handleChange} value={note} />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
};

export default JournalEntry;

JournalEntry.propTypes = {
  note: PropTypes.string,
  today: PropTypes.instanceOf(Date),
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

JournalEntry.defaultProps = {
  note: '',
  today: new Date(Date.now()),
}