import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import EosBoilerplate from './eosBoilerplate';
import PollList from './PollList';
import LoginCard from './LoginCard';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountInfo: null,
    }
  }

  login = () => {
    this.setState({
      accountInfo: {
        userName: "user A",
        privateKey: "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5",
        publicKey: "EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b",

      },
    })
  }

  logout = () => {
    this.setState({
      accountInfo: null,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            EOS Spaces
          </p>
          {/* login button */}
          { this.state.accountInfo &&
            <Button
              onClick={this.logout}
            />
          }
        </header>

        {/* <EosBoilerplate /> */}
        { this.state.accountInfo ?
          <Card>
            <CardContent>
              <Typography variant="headline" component="h2">
                Welcome {this.state.accountInfo.userName}
              </Typography>
              <PollList
                accountInfo={this.state.accountInfo}
              />
            </CardContent>
          </Card>
        :
          <LoginCard
            login={this.login}
          />
        }

        {/* <UsageData /> */}
      </div>
    );
  }
}

export default App;
