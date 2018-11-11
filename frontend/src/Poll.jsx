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

import ButtonTray from './ButtonTray';


export default class Polls extends React.Component {
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
        <Card classes={{
          root: 'thin-card',
           }
        }>
          <CardContent>
            {/* title */}
            <Typography variant="headline" component="h2">
              {props.title}
            </Typography>
            {/* text */}
            <Typography style={{fontSize:12}} color="textSecondary" gutterBottom>
              {props.text}
            </Typography>
            {/* buttons */}
            <ButtonTray
              action={props.actionName}
              options={props.options}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

Polls.propTypes = {
  pollDataObject: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    actionName: PropTypes.string,
    // buttons
    options: PropTypes.array,
    vote: PropTypes.string,
  }).isRequired
};
