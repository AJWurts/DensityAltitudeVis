import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'


class NumberSlider extends Component {
    constructor(props) {
        super(props);
    }

 

    onChange = (new_value) => {
        console.log(this.props.keyVal);
        this.props.onChange(this.props.keyVal, new_value);
    }

    render() {
        var val = this.props.val;
        return (
            <Slider
                value={val}
                min={this.props.min}
                max={this.props.max}
                onChange={this.onChange}
              />
        );
    }
}


export default NumberSlider


