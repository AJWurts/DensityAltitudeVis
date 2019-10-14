import React, { Component } from 'react';
import logo from './logo.svg';
import NumberSlider from './components/numberslider';
import InputLabel from './components/input';
import PressureGraph from './components/visualization';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 15,
      humidity: 50,
      pressure: 29.92,
      isMoble: false,
    }
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 600 });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  reset = () => {
    this.setState({
      temperature: 15,
      humidity: 50,
      pressure: 29.92
    })
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    var { temperature, humidity, pressure, isMobile } = this.state;

    return (
      <div>
        <div className="App">
          <div style={{ display: 'inline-block', width: isMobile ? '100%' : '75%', height: '100%', margin: '0px' }}>
            <span style={{ fontSize: '20px' }}>
              True Altitude: Black
              </span>
            <span style={{ fontSize: '20px', float: 'right', color: 'blue' }}>
              Density Altitude: Blue
              </span>
            <PressureGraph temperature={temperature} humidity={humidity} pressure={pressure}></PressureGraph>
          </div>

          <div style={{ padding: '20px', display: 'inline-block', height: '100%', verticalAlign: 'top' }}>
            <div style={{ padding: '0px 0px 20px 0px' }}>

              <NumberSlider
                label={"Temperature"}
                value={temperature}
                keyVal={'temperature'}
                step={1}
                min={-20} max={50}
                units={'C'}
                vertical={!isMobile}
                onChange={this.onChange} />
              {/* <NumberSlider
              label={"Humidity"} value={humidity} min={0} max={100}
              units={"%"} keyVal={'humidity'} onChange={this.onChange} /> */}
              <NumberSlider
                label={"Pressure"}
                value={pressure}
                min={28.60} max={31.00}
                units={"inHg"}
                vertical={!isMobile}
                step={0.01}
                keyVal={'pressure'}
                onChange={this.onChange} />
            </div>

            <div style={{ padding: '20px 0px 0px 0px' }}>
              <InputLabel onChange={this.onChange} keyVal={'temperature'} value={temperature} label={"Temperature (C)"} />
              {/* <InputLabel onChange={this.onChange} keyVal={'humidity'} value={humidity} label={"% Humidity"} /> */}
              <InputLabel step={0.01} onChange={this.onChange} keyVal={'pressure'} value={pressure} label={"Pressure (inHg)"} />
            </div>


            <div>
              <button onClick={this.reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className={"App"}>

        </div>
      </div>
    );
  }

}

export default App;
