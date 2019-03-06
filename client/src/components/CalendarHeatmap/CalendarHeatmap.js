import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import { shiftDate, getTooltip } from './helpers';

import 'react-calendar-heatmap/dist/styles.css';
import './calendarheatmap.css';

class CalendarHeatMap extends Component {
  render() {
    const { entries } = this.props;
    const today = new Date();

    if (entries.length) {
      return (
        <div className="heatmap-container">
          <CalendarHeatmap
            startDate={shiftDate(today, -150)}
            values={entries}
            showWeekdayLabels={true}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-scale-${value.score}`;
            }}
            tooltipDataAttrs={value => {
              return {
                'data-tip': getTooltip(value), 
              };
            }}
          />
          <ReactTooltip />
        </div>
      )
    }
    else return null;
  }
}

export default CalendarHeatMap;


