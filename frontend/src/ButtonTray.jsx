import React from 'react';
import PropTypes from 'prop-types';



export default class ButtonTray extends React.Component {
  constructor(props) {
    super(props);
  }

  // map over options - create buttons


  render() {
    return (
      <div className="button-tray">
        ButtonTray

      </div>
    );
  }
}

ButtonTray.propTypes = {
  options: PropTypes.array
};
