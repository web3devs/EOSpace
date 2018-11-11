export const pollDataArray = [
  {
    title: 'Should we move the monthly meetings to a Friday instead of Thursdays?',
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
    title: 'What blockchain technologies would you like to learn more about?',
    text: 'multiple choice example poll',
    actionName: 'multipleChoice',
    // buttons
    options: [
      { text: 'EOS', value: 'A' },
      { text: 'ActiveAether', value: 'B' },
      { text: 'PIVX', value: 'C' },
      { text: 'WP-ICO', value: 'D' }
    ],
    vote: null,
  },
  {
    title: 'Would you come a 10 year bitcoin genesis block anniversary party?',
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

export const pollReportData = [
  {
    title: 'Should we move the monthly meetings to a Friday instead of Thursdays?',
    text: '',
    actionName: 'yesNoAction',
    // buttons
    options: [
      { text: 'yes', value: 60 },
      { text: 'no', value: 30 }
    ],
    totalPercent: 51,
    weightedText: "Number of Meetups attended",
    weightedData: [
      { userName: "alice", vote: "yes", data: "10" },
      { userName: "bob", vote: "no", data: "1" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" }
    ]
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
    weightedText: "Number of Meetups attended",
    weightedData: [
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
    totalPercent: 20,
    weightedText: "Number of Meetups attended",
    weightedData: [
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" },
      { userName: "", vote: "", data: "" }
    ]
  },
]
