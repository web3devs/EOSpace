import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EosBoilerplate from './eosBoilerplate';
import PollList from './PollList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            EOSspaces
          </p>
        </header>
        {/* <EosBoilerplate /> */}
        <PollList />
        {/* <UsageData /> */}
      </div>
    );
  }
}

export default App;
