import React, { Component } from 'react';
import {QuickStartCanvas, PtsCanvas} from "react-pts-canvas";
import {ChartExample, AnimationExample} from './Example';
import {Util, Line} from 'pts';
import Highlight from 'react-highlight'
import {Pt, Group, Create, Sound, Triangle, Const, Geom} from 'pts/dist/es5'

export default class Home extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      variance: 0.2,
      pauseAnimation: false
    }

    this.mockData( 0.2 );

  }

  mockData( variance ) {
    let gaussian = (x) => {
      let mean = 0;
      return (1 / Math.sqrt( 2 * Math.PI * variance ) ) * Math.exp( -(x-mean)*(x-mean)/(2*variance) );
    };

    this.chartData = [];
    for (let i=-5; i<5; i+=0.1) {
      this.chartData.push( gaussian(i) );
    }
  }

  handleChange(event) {
    this.setState({variance: event.target.value});
  }

  handleClick(event) {
    this.setState({pauseAnimation: !this.state.pauseAnimation});
  }

  componentWillUpdate(nextProps, nextState) {
    this.mockData( nextState.variance );
  }

  render() {
    return (
      
      <div className="App" style={{textAlign: "left"}}>
      
        <div className="row">
          <div><QuickStartCanvas onAnimate={(space, form, time) => {
            let subs = space.innerBound.map( p => Line.subpoints( [p, space.pointer], 30 ) );
            form.strokeOnly("#FDC", 2).rects( Util.zip( subs ) );
          }} /></div>
        </div>


        <div className="row">
          <div><AnimationExample name="pts_anim" background="#3344ff" pause={this.state.pauseAnimation} /></div>
          <div>
            <p>Hover over the canvas to change the animation, and toggle Play/Pause by clicking this button: </p>
            <p><button onClick={this.handleClick.bind(this)}>{this.state.pauseAnimation ? "Play" : "Pause"}</button></p>
          </div>
        </div>

        <div className="row">
          <div><ChartExample name="pts_chart" background="#0c9" play={false} data={this.chartData} variance={this.state.variance} /></div>
          <div>
            <h3>ChartExample with PtsCanvas</h3>
            <p>You can also use Pts to build a custom visualization component. The following example draws a bell curve on canvas. Change the variance property to update the visualization:</p>
            <p><label>Variance: <input type="range" value={this.state.variance} min={0.05} max={5} step={0.05} onChange={this.handleChange.bind(this)} /></label> ({this.state.variance})</p>
          </div>
        </div>
        
      </div>
    );
  }
}