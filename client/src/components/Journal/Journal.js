import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Journal extends PureComponent {
  render() {
    return (
      <div className="journal" />
    )
  }
}

Journal.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.string,
      date: PropTypes.string,
    })
  )
}

Journal.defaultProps = {
  entries: [],
}