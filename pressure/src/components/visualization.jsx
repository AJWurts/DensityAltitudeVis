import React, { Component } from 'react';
import * as d3 from 'd3';

class PressureGraph extends Component {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillReceiveProps(props) {
        // this.props = props;
        // console.log(Object.keys(this.props));
        this.createGraph(props)
    }

    componentDidMount() {
        this.createGraph(this.props);
    }

    // getSnapshotBeforeUpdate(props) {
    //     this.createGraph()
    // }

    createGraph = (props) => {
        let svg = d3.select(this.svg);
        svg.selectAll('*').remove()

        let height = 500;
        let width = 500

        // svg.attr('width', height);
        // svg.attr('height', width);

         var {temperature, humidity, pressure} = props;
        // console.log(temperature, humidity, pressure)
        let minAlt = (29.92 - pressure) * 1000

        let minDAlt = minAlt + (120 * (temperature - 15))
  
        let trueAltScale = d3.scaleLinear()
            .domain([0, 10000])
            .range([height, 0])

        let presAltScale = d3.scaleLinear()
            .domain([minDAlt, minDAlt + 10000])
            .range([height, 0])

        
        svg.selectAll(".truealt")
            .data(d3.range(0, 10001, 1000))
            .enter()
            .append('line')
            .attr('class', 'truealt')
            .attr('x1', 0)
            .attr('x2', width / 2)
            .attr('y1', d => trueAltScale(d))
            .attr('y2', d => trueAltScale(d))
            .attr('stroke', 'black')
            .attr('stroke-width', 3)

        svg.selectAll('.truealtlabel')
            .data(d3.range(0, 10001, 1000))
            .enter()
            .append('text')
            .attr('class', 'truealtlabel')
            .attr('x', 10)
            .attr('y', d => trueAltScale(d) - 5)
            .text(d => d + "ft")
            .attr('font-size', '20px')

        svg.selectAll('.pressurealt')
            .data(d3.range(-10000, 100001, 1000))
            .enter()
            .append('line')
            .attr('class', 'pressurealt')
            .attr('x1', width / 2)
            .attr('x2', width)
            .attr('y1', d => presAltScale(d))
            .attr('y2', d => presAltScale(d))
            .attr('stroke', 'blue')
            .attr('stroke-width', 3)

        svg.selectAll('.pressurealtlabel')
            .data(d3.range(-10000, 20000, 1000))
            .enter()
            .append('text')
            .attr('class', 'truealtlabel')
            .attr('x', width - 10)
            .attr('y', d => presAltScale(d) - 5)
            .attr('text-anchor', 'end')
            .text(d => d + "ft")
            .attr('color', 'blue')
            .attr('font-size', '20px')

        

    }

    render() {
        return (
            <div>
                <svg ref={svg => this.svg = svg}
                viewBox="0 0 500 500" >

                </svg>
            </div>
        );
    }
}

export default PressureGraph;
