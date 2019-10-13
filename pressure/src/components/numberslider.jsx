import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'


class NumberSlider extends Component {
    constructor(props) {
        super(props);
    }



    onChange = (new_value) => {
        this.props.onChange(this.props.keyVal, new_value);
    }

    render() {
        return (
            <div style={{   width:'50px', display: 'inline-block', height: '400px', verticalAlign: 'top'}}>
                <div>
                    {this.props.max + this.props.units}
                </div>
                <Slider
                {...this.props}
                style={{height: '100%'}}
                    vertical={true}
                    onChange={this.onChange}
                />
                <div>
                    {this.props.min + this.props.units}
                </div>
            </div>


        );
    }
}


export default NumberSlider


