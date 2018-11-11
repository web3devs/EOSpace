import React from 'react';
import PropTypes from 'prop-types';

import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
import { TextDecoder, TextEncoder } from 'text-encoding';

import Button from '@material-ui/core/Button';

export default class ButtonTray extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonColor: "primary"
    }
  }

  async fireAction(action, value) {
    // event.preventDefault();
    //
    // // collect form data
    // let account = event.target.account.value;
    // let privateKey = event.target.privateKey.value;
    // let note = event.target.note.value;
    //
    // // prepare variables for the switch below to send transactions
    // let actionName = "";
    // let actionData = {};
    //
    // // define actionName and action according to event type
    // switch (event.type) {
    //   case "submit":
    //     actionName = "update";
    //     actionData = {
    //       user: account,
    //       note: note,
    //     };
    //     break;
    //   default:
    //     return;
    // }
    //
    // // eosjs function call: connect to the blockchain
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
    //      console.log(JSON.stringify(e.json, null, 2));
    //    }
    //  }
    this.props.selected();
    this.setState({ buttonColor: "disabled" })
  }

  // map over options - create buttons
  generateButtons = () => {
    let buttons = this.props.options.map((option) => {
      console.log('OPTION', option);
      return <Button
        key={option.text}
        variant="contained"
        color={this.state.buttonColor}
        // className={classes.formButton}
        onClick={event => this.fireAction(this.props.action, option.value)}
      >
        {option.text}
      </Button>
    })
    return buttons;
  }

  render() {
    // console.log(this.props);

    return (
      <div className="row">
        {this.generateButtons()}
      </div>
    );
  }
}

ButtonTray.propTypes = {
  action: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
