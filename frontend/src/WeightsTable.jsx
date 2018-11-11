import React from 'react';
import PropTypes from 'prop-types';

// import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs'; // https://github.com/EOSIO/eosjs
// import { TextDecoder, TextEncoder } from 'text-encoding';

import Button from '@material-ui/core/Button';

export default class WeightsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  generateTable = () => {
    let buttons = this.props.options.map((option) => {
      console.log('OPTION', option);
      return <div className="table-row">
        {option.text}
      </div>
    })
    return buttons;
  }

  render() {
    console.log(this.props);
    return (
      <div className="weights-table">
        {/* desc */}

        {/* table header - name, vote, data */}
        <

        {this.generateTable()}
      </div>
    );
  }
}

WeightsTable.propTypes = {
  action: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
