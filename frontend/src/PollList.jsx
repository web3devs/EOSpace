import React from 'react';
import PropTypes from 'prop-types';
import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
// import { TextDecoder, TextEncoder } from 'text-encoding';

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
    this.getPolls(this.props.accountInfo); // UI testing - data from data.js
    // this.getTable(); // data from contract
  }

  // get data from contract
  getTable() {
    console.log('getTable');
    const rpc = new JsonRpc(endpoint);
    // const signatureProvider = new JsSignatureProvider(['5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3']);
    // const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
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
            if (result['rows'][i]['actionName'] === "yesNoAction") {
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

  // get test data
  async getPolls(accountName) {
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
        {this.generatePollList()}
      </div>
    );
  }
}

PollList.propTypes = {
  accountName: PropTypes.string
};
