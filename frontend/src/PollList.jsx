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
import { pollDataArray } from './data';

const endpoint = 'http://localhost:7777';

export default class PollList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollDataArray: null,
      // done: false
    }
  }

  componentDidMount() {
    this.getPolls(this.props.accountInfo); // UI testing
    // this.getTable(); 
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.pollDataArray !== null && this.state.done === false) {
  //
  //   }
  // }

  getTable() {
    console.log('getTable');
    const rpc = new JsonRpc(endpoint);
    const signatureProvider = new JsSignatureProvider(['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3']);
    const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
    rpc.get_table_rows({
       "json": true,
       "code": "survey",   // contract who owns the table
       "scope": "survey",  // scope of the table
       "table": "pollitems",    // name of the table as specified by the contract abi
       "limit": 100,
     }).then(result => {
        console.log(result);
        for (var i=0; i < result['rows'].length; i++ ) {
            console.log(result['rows'][i]);
            var options = [];
            if (result['rows'][i]['actionName'] == "yesNoAction") {
              options = [
                { text: 'yes', value: true },
                { text: 'no', value: false }
              ];
            } else {
              options =  [
                { text: 'EOS', value: 'A' },
                { text: 'ActiveAether', value: 'B' },
                { text: 'PIVX', value: 'C' },
                { text: 'WP-ICO', value: 'D' }
              ]
            }
            const pollDataItem = {
              title: result['rows'][i]['question'],
              text: '',
              actionName: 'yesNoAction',
              // buttons
              options: options,
              vote: null,
            }
            pollDataArray.push(pollDataItem);

        }
        this.setState({
          pollDataArray: pollDataArray
        });
     });
  }


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
