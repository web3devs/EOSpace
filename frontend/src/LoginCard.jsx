import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
  button: {
    background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px var(--box-shadow)',
  },
};

class LoginCard extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  requestAccess = () => {
    // return loginObject from server
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>

            <Typography variant="headline" component="h2">
              Login
            </Typography>
            <div className="row-sa">
              <TextField
                name="userName"
                autoComplete="off"
                label="User Name"
                margin="normal"
                // fullWidth
              />
              <TextField
                name="password"
                autoComplete="off"
                label="Password"
                margin="normal"
                // fullWidth
              />
            </div>
            <div className="row-sa">
              <Button
                onClick={event => this.props.login('User')}
              >
                Login as User
              </Button>
              <Button
                onClick={event => this.props.login('Owner')}
              >
                Login as Owner
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

}
export default withStyles(styles)(LoginCard);
