import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let [x,y] = [event.clientX, event.clientY]
    // let [x,y] = [event.screenX, event.screenY] //this works too
    drawChromeBoiAtCoords(x, y);
    
  }
  
  handleClick=()=>{
    toggleCycling();
  }
  
   
   handleKeyPress=(event)=>{
     let action;
     if(event.key==="a"){
       action="+";
       resize(action);
     }

     if(event.key==="s"){
       action="-";
       resize(action);
     }
   }
  
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
