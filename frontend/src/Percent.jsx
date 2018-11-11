import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Vote extends Component {

  static propTypes = {
    option: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div
        // style={{ height: 200 }}
        className="col percent"
      >
        Percent of Total Users
        {/* <Button>
          {this.props.option.text}
        </Button> */}
        <div className="chart-bar">
          {this.props.percent} %
        </div>
      </div>
    );
  }

}
