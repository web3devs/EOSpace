import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Vote from './Vote';

export default class VotesTray extends React.Component {
  constructor(props) {
    super(props);
  }

  // map over options - create buttons
  generateVotes = () => {
    let buttons = this.props.options.map((option) => {
      console.log('OPTION', option);
      return <Vote
        key={option.text}
        option={option}
      />
    })
    return buttons;
  }

  render() {
    console.log(this.props);
    return (
      <div className="button-tray">
        {this.generateButtons()}
      </div>
    );
  }
}

VotesTray.propTypes = {
  action: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
