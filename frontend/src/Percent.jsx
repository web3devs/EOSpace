import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-easy-chart';


export default class Vote extends Component {

  static propTypes = {
    percent: PropTypes.number
  };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     width: this.props.options.length * 50 + 100
  //   }
  // }


  formatData = (percent) => {
    let color;
    if (percent <= 50) color = 'red';
    if (percent > 50) color = 'green';
    return [{ x: '%', y: percent, color: color }];
  }

  render() {
    return (
      <div
        className="col percent"
      >
        {/* Percent of Total Users
        <div className="chart-bar">
          {this.props.percent} %
        </div> */}

        <BarChart
          colorBars
          axes
          height={250}
          width={150}
          yDomainRange={[0, 100]}
          data={this.formatData(this.props.percent)}
        />

      </div>
    );
  }

}
