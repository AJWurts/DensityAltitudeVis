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
        let { vertical } = this.props;
        return (
            <div style={{   width: vertical ? '50px' : '200px', display: 'inline-block', height: vertical ? '400px' : '50px', verticalAlign: 'top'}}>
                <div style={{display: vertical ? "block" : "inline-block"}}>
                    {this.props.max + this.props.units}
                </div>
                <Slider
                {...this.props}
                style={{height: '100%', display: vertical ? "block" : "inline-block"}}
                    onChange={this.onChange}
                />
                <div style={{display: vertical ? "block" : "inline-block"}} >
                    {this.props.min + this.props.units}
                </div>
            </div>


        );
    }
}


export default NumberSlider


