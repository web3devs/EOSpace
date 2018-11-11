import React from 'react';
import PropTypes from 'prop-types';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
import { TextDecoder, TextEncoder } from 'text-encoding';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Poll from './Poll';

const endpoint = 'http://localhost:8888';

export default class PollList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollDataArray: null,
      // done: false
    }
  }

  componentDidMount() {
    this.getPolls(this.props.accountInfo);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.pollDataArray !== null && this.state.done === false) {
  //
  //   }
  // }

  // getTable() {
  //   const rpc = new JsonRpc(endpoint);
  //   rpc.get_table_rows({
  //     "json": true,
  //     "code": "notechainacc",   // contract who owns the table
  //     "scope": "notechainacc",  // scope of the table
  //     "table": "notestruct",    // name of the table as specified by the contract abi
  //     "limit": 100,
  //   }).then(result => this.setState({ noteTable: result.rows }));
  // }


  // get polls for this user
  async getPolls(accountName) {
    // const rpc = new JsonRpc(endpoint);
    // const signatureProvider = new JsSignatureProvider([privateKey]);
    // const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    // try {
    //   const result = await api.transact({
    //     actions: [{
    //       account: "notechainacc",
    //       name: actionName,
    //       authorization: [{
    //         actor: account,
    //         permission: 'active',
    //       }],
    //       data: actionData,
    //     }]
    //   }, {
    //     blocksBehind: 3,
    //     expireSeconds: 30,
    //   });
    //
    //   console.log(result);
    //   this.getTable();
    // } catch (e) {
    //   console.log('Caught exception: ' + e);
    //   if (e instanceof RpcError) {
    //     console.log(JSON.stringify(e.json, null, 2));
    //   }
    // }
    /* contract ^^^^^ */
    /* testing vvvvv */
    let pollDataArray = [
      {
        title: 'y/n example',
        text: 'simplest poll',
        actionName: 'yesNoAction',
        // buttons
        options: [
          { text: 'yes', value: true },
          { text: 'no', value: false }
        ],
        vote: null,
      },
      {
        title: 'multiple choice ',
        text: 'multiple choice example poll',
        actionName: 'multipleChoice',
        // buttons
        options: [
          { text: 'A', value: 'A' },
          { text: 'B', value: 'B' },
          { text: 'C', value: 'C' },
          { text: 'D', value: 'D' }
        ],
        vote: null,
      },
      {
        title: 'y/n example',
        text: 'simplest poll',
        actionName: 'yesNoAction',
        // buttons
        options: [
          { text: 'yes', value: true },
          { text: 'no', value: false }
        ],
        vote: null,
      },
    ]
    this.setState({
      pollDataArray: pollDataArray
    });
  }

  // generate list
  generatePollList = () => {
    let pollList = "";
    if (this.state.pollDataArray !== null) {
      pollList = this.state.pollDataArray.map((dataObject) => {
        return <Poll
          pollDataObject={dataObject}
        />
      })
    } else {
      pollList =  'Loading...'
    }
    return pollList;
  }

  render() {
    return (
      <div>
        list current polls
        {this.generatePollList()}
      </div>
    );
  }
}

PollList.propTypes = {
  accountName: PropTypes.string
};
