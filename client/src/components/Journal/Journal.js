import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import JournalEntryData from '../../containers/JournalEntryData/JournalEntryData';
import JournalEntryForm from '../JournalEntryForm/JournalEntryForm';

const JournalEntryFormWithData = JournalEntryData(JournalEntryForm);

class Journal extends PureComponent {

  render() {
    const { name } = this.props;
    return (
      <div className="journal">
        <h1>Hi, {name}</h1>
        <JournalEntryFormWithData />
      </div>
    )
  }
}

export default Journal;

Journal.propTypes = {
  name: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.num,
      date: PropTypes.string,
    })
  ),
}

Journal.defaultProps = {
  name: '',
  entries: [],
}