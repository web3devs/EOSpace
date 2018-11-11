pollData = {
  title: string,
  text: string,
  actionName: string,
  // buttons
  options: [
    {
      text: 'name', // displays in button
      value: value, // sent to contract
    },
    {
      text: 'name',
      value: value,
    },
    {...}
  ],
  vote: value, // null (not yet voted) or options.value that was picked
}

proptypeArray = [
  {
    text: PropTypes.string, // displays in button
    value: PropTypes.string, // sent to contract
  },
  {
    text: PropTypes.string,
    value: PropTypes.string,
  },
],
