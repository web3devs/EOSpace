import React from 'react';
import PropTypes from 'prop-types';

// material-ui dependencies
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ButtonTray from './ButtonTray';


export default class Polls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  selected = () => {
    this.setState({
      selected: true
    })
  }

  render() {
    const props = this.props.pollDataObject;

    return (
      <div
        // className={`${cardStyle}`}
        >
        <Card classes={{ root: "thin-card" }}>
          <CardContent>

            <Typography variant="headline" component="h2"
              style={ (this.state.selected ? {color: "#d9d9d9"} : {}) }
            >
              {props.title}
            </Typography>

            <Typography
              style={ (this.state.selected ?
                { fontSize: 12, margin: 20, color: "#d9d9d9" } : 
                { fontSize: 12, margin: 20, color: "textSecondary" })}
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
