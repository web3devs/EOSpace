import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

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
      <div className="col">
        Vote
        <Button>
          {this.props.option.text}
        </Button>
        <div className="chart-bar">

        </div>
      </div>
    );
  }

}
