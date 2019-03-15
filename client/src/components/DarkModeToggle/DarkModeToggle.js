import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

import './darkmodetoggle.css';

const Lightbulb = () => (
  <div style={{
    fontSize: '1.2em',
    position: 'absolute',
    top: '0.4em',
  }}>
    <span role="img" aria-label="lightbulb">💡</span>
  </div>
)

// const Moon = () => (
//   <div style={{
//     fontSize: '1em',
//     position: 'absolute',
//     top: '0.4em',
//   }}>
//     <span role="img" aria-label="moon">🌑</span>
//   </div>
// )

const DarkModeToggle = ({ darkModeOn, darkMode }) => {
  return (
     <Toggle
      defaultChecked={darkModeOn}
      className={'darkmode-toggle'}
      icons={{
        checked: '',
        unchecked: <Lightbulb />,
      }}
      onChange={darkMode} />
  )
}

export default DarkModeToggle;

DarkModeToggle.propTypes = {
  darkModeOn: PropTypes.bool,
  darkMode: PropTypes.func,
}