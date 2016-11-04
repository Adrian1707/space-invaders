import React, { Component } from 'react';
import SpaceShip from './SpaceShip.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {'bullets': 4};
    this.handleClick = this.handleClick.bind(this);
    this.reload = this.reload.bind(this);
  }

  shoot(){
    if(this.state.bullets === 0 ){
      alert("YOU NEED TO RELOAD!")
    }
    else{
      return (this.setState({'bullets': this.state.bullets -1 }))
    }
  }

  reload(){
    return this.setState({'bullets': 5})
  }

  displayBullets(){
    return (this.state.bullets)
  }

  handleClick(){
    this.shoot();
  }

  render(){
    return (
    <div>
    <button onClick={this.handleClick}> SHOOT!</button>
    <button onClick={this.reload}>RELOAD</button>
    <SpaceShip />
    <h1 style={{color:'red'}}>{this.state.bullets}</h1>
    </div>
    )
  }
};

export default Game;
