import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

import 'react-calendar-heatmap/dist/styles.css';
import './calendarheatmap.css';

class CalendarHeatMap extends Component {
  render() {
    const { entries } = this.props;

    if (entries.length) {
      return (
        <div className="heatmap-container">
          <CalendarHeatmap
            startDate={new Date(entries[0].date)}
            endDate={new Date(entries[entries.length - 1].date)}
            values={entries}
            showWeekdayLabels={true}
          />
        </div>
      )
    }
    else return null;
  }
}

export default CalendarHeatMap;