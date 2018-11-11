import React from 'react';
import PropTypes from 'prop-types';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
import { TextDecoder, TextEncoder } from 'text-encoding';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import PollReportCard from './PollReportCard';
import { pollReportData } from './data';

const endpoint = 'http://localhost:8888';

export default class PollReportList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pollReportData: null,
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

    this.setState({
      pollReportData: pollReportData
    });
  }

  // generate list
  generatePollList = () => {
    let pollList = "";
    if (this.state.pollReportData !== null) {
      pollList = this.state.pollReportData.map((dataObject) => {
        return <PollReportCard
          dataObject={dataObject}
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
        {this.generatePollList()}
      </div>
    );
  }
}

PollReportList.propTypes = {
  accountName: PropTypes.string
};
