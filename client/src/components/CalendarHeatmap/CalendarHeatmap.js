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
            startDate={new Date('2019-01-01')}
            endDate={new Date('2019-03-05')}
            values={entries}
            showWeekdayLabels={true}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-scale-${value.score}`;
            }}
          />
        </div>
      )
    }
    else return null;
  }
}

export default CalendarHeatMap;