import React from 'react';
import PropTypes from 'prop-types';

// material-ui dependencies
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Table from './Table';
import VotesTray from './VotesTray';
import Vote from './Vote';

export default class PollReportCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // generate button tray
  // generateButtons = () => {
  //
  // }

  render() {
    const props = this.props.pollDataObject;
    return (
      <div>
        <Card>
          <CardContent>

            <Typography variant="headline" component="h2">
              {props.title}
            </Typography>

            <Typography style={{fontSize:12}} color="textSecondary" gutterBottom>
              {props.text}
            </Typography>

            <VotesTray
              options={props.options}
            />
            <Vote
              option={props}
            />
            <Table

            />

          </CardContent>
        </Card>
      </div>
    );
  }
}

PollReportCard.propTypes = {
  dataObject: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    // actionName: PropTypes.string,
    // votes
    options: PropTypes.array,
    totalPercent: PropTypes.string,
  }).isRequired
};
