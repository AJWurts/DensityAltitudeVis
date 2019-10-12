import React, { Component } from 'react';
import logo from './logo.svg';
import PressureGraph from './components/visualization';
import NumberSlider from './components/numberslider';
import HumiditySlider from './components/humidityslider';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 15,
      humidity: 50,
      pressure: 29.92
    }
  }

  onChange = (key, value) => {
    console.log(key, value);
    this.setState({
      [key]: value
    })
  }

  render() {
    var { temperature, humidity, pressure } = this.state;

    return (
      <div className="App">
        {/* <header className="App-header"> */}
        {/* </header> */}
        <PressureGraph temperature={temperature} humidity={humidity} pressure={pressure}></PressureGraph>
        <div style={{ padding: '20px' }}>
          <NumberSlider val={temperature} keyVal={'temperature'}
            min={-40} max={120} onChange={this.onChange} />
          <NumberSlider val={humidity} min={0} max={100} keyVal={'humidity'} onChange={this.onChange} />
        </div>
  
  
  
      </div>
        );
      }
    
    }
    
    export default App;
