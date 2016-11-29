import React, { Component } from 'react';
import Bullet from './Bullet.js'
import {comparePosition, verticalPosition } from './Position.js'

class SpaceShip extends Component {

  constructor(props) {
    super(props);
    this.state = {"bulletClass": "stable-bullet"}
    this.fire = this.fire.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.margin = 0
  }

  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  fire() {
    this.setState({"bulletClass": "moving-bullet"})
    var timer = setInterval(() => {
      if(comparePosition()) {
        clearInterval(timer)
        this.props.destroyEnemy()
      }
      else if(verticalPosition()){
        clearInterval(timer)
      }
    }, 50)

   setTimeout(() => {
      this.setState({"bulletClass" : "stable-bullet"})
      clearInterval(timer)
    }, 800)
  }

  moveRight(){
    this.margin += 30
    this.refs.ship1.style.marginLeft = this.margin + "px"
  }

  moveLeft(){
    this.margin -= 30
    this.refs.ship1.style.marginLeft = this.margin + "px"
  }

  handleKeyDown(e){
    switch(e.keyCode){
      case 32:
        this.fire();
        break;
      case 39:
        this.moveRight();
        break;
      case 37:
        this.moveLeft();
        break;
    }
  }

  render(){
    return (
      <div onClick={this.fire}  onKeyDown={this.handleKeyDown} className="ship" id="ship" ref="ship1">
        <Bullet bulletClass={this.state.bulletClass} />
      </div>
    )
  }
};

export default SpaceShip;
