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
    this.state = {
      selected: false
    }
  }

  // generate button tray
  // generateButtons = () => {
  //
  // }

  selected = () => {
    this.setState({
      selected: true
    })
  }

  render() {
    const props = this.props.pollDataObject;
    let cardStyle = "thin-card"
    // let buttonStyle = ""
    if (this.state.selected) {
      cardStyle = "thin-gray-card"
      // buttonStyle = "ghost"
    }
    return (
      <div
        // className={`${cardStyle}`}
        >
        <Card classes={{ root: "thin-card" }}
           // style={ (this.state.selected ? {color: "#d9d9d9"} : {}) }
        >
          <CardContent
            // style={ (this.state.selected ? {color: "#d9d9d9"} : {}) }
          >

            <Typography variant="headline" component="h2"
              style={ (this.state.selected ? {color: "#d9d9d9"} : {}) }
            >
              {props.title}
            </Typography>

            <Typography
              // style={{fontSize:12}}
              style={ (this.state.selected ? { fontSize:12, color: "#d9d9d9" } : { fontSize:12, color: "textSecondary" })}
              gutterBottom
            >
              {props.text}
            </Typography>

            <ButtonTray
              action={props.actionName}
              options={props.options}
              selected={this.selected}
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
