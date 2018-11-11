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
import PollReportList from './PollReportList';
import LoginCard from './LoginCard';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: null,
    }
  }

  login = (group) => {
    // if (group === 'User') {
      this.setState({
        group: group
      })
    // }
    // if (group === 'Owner') {
    //   this.setState({
    //
    //   })
    // }

    // this.setState({
    //   accountInfo: {
    //     userName: "user A",
    //     privateKey: "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5",
    //     publicKey: "EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b",
    //   },
    // })
  }

  logout = () => {
    this.setState({
      group: null,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="header-title">

          </h2>
          {/* login button */}
          { this.state.group &&
            <Button
              onClick={this.logout}
            >
              Logout
            </Button>
          }
        </header>

        {/* <EosBoilerplate /> */}
        { this.state.group ?

          <Card>
            <CardContent>
              <h2 className="header-stuff">
                {this.state.group} View
              </h2>
              { this.state.group === 'User' &&
                <PollList
                  accountInfo={this.state.accountInfo}
                />
              }
              { this.state.group === 'Owner' &&
                <PollReportList
                  accountInfo={this.state.accountInfo}
                />
              }
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
