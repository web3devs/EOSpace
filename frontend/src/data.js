// pollData = {
//   title: string,
//   text: string,
//   actionName: string,
//   // buttons
//   options: [
//     {
//       text: 'name', // displays in button
//       value: value, // sent to contract
//     },
//     {
//       text: 'name',
//       value: value,
//     },
//     {...}
//   ],
//   vote: value, // null (not yet voted) or options.value that was picked
// }

export const pollDataArray = [
  
]

export const pollReportData = [
  {
    title: 'Move Meetings to Friday?',
    text: 'We are ',
    actionName: 'yesNoAction',
    // buttons
    options: [
      { text: 'yes', value: 60 },
      { text: 'no', value: 30 }
    ],
    vote: null,
  },
  {
    title: 'multiple choice ',
    text: 'multiple choice example poll',
    actionName: 'multipleChoice',
    // buttons
    options: [
      { text: 'A', value: 20 },
      { text: 'B', value: 12 },
      { text: 'C', value: 3 },
      { text: 'D', value: 9 }
    ],
    totalPercent: 35,
    weighted: [
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" }
    ]
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

// proptypeArray = [
//   {
//     text: PropTypes.string, // displays in button
//     value: PropTypes.string, // sent to contract
//   },
//   {
//     text: PropTypes.string,
//     value: PropTypes.string,
//   },
// ],
