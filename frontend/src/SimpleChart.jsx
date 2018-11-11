import React from 'react';
import BarChart from 'react-bar-chart';

const data = [
  {text: 'Man', value: 50},
  {text: 'Woman', value: 30}
];

const margin = {top: 20, right: 50, bottom: 30, left: 50};

export default class SimpleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 200
    }
  }


  componentDidMount() {
    window.onresize = () => {
     this.setState({ width: this.refs.root.offsetWidth });
    };
  }

  handleBarClick(element, id){
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render() {
    return (
        <div ref='root'>
            <div style={{ width: '20%', color: 'red' }}>
                <BarChart ylabel='Quantity'
                  width={this.state.width}
                  height={200}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div>
    );
  }
};
