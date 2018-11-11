import React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-easy-chart';


export default class EasyChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.options.length * 75 + 100
    }
  }

  formatData = () => {
    let xyData = this.props.options.map((option) => {
      return { x: option.text, y: option.value }
    })
    return xyData;
  }


  render() {
    // const data = this.props.options;
    return (
      <div>
        <BarChart
          colorBars
          axes
          height={250}
          width={this.state.width}
          data={this.formatData()}
        />
      </div>
    );
  }
}

EasyChart.propTypes = {
};
