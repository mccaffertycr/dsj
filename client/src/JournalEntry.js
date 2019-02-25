import React from 'react';

const labels = ['--', '-', '0', '+', '++'];
// const emojis = ['😢', '🙁', '😐', '🙂', '😄'];
const values = [-2, -1, 0, 1, 2];

const JournalEntry = props => {
  const { note, date, handleChange, handleSubmit } = props;
  return (
    <form>
      <h2>Hello,</h2>
      <p>{date.toDateString()}</p>
      {values.map(v => {
        return (
          <>
            <input
              key={v + 2}
              type="radio"
              name="score"
              onChange={handleChange}
              value={v}
            />
            <label key={v + 10} htmlFor="score">
              {labels[values.indexOf(v)]}
            </label>
          </>
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
