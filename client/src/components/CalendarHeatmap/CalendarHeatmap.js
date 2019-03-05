import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

import 'react-calendar-heatmap/dist/styles.css';
import './calendarheatmap.css';

class CalendarHeatMap extends Component {
  render() {
    const { entries } = this.props;

    if (entries.length) {
      return (
        <CalendarHeatmap
          startDate={new Date(entries[0].date)}
          endDate={new Date(entries[entries.length - 1].date)}
          values={entries}
          showWeekdayLabels={true}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${value.score}`;
          }}
        />
      )
    }
    else return null;
  }
}

export default CalendarHeatMap;