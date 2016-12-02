import React, { Component } from 'react';
import MovingBullet from './MovingBullet.js'
import {comparePosition, verticalPosition, getPosition } from './Position.js'

class SpaceShip extends Component {

  constructor(props) {
    super(props);
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
    this.props.changeMovingBulletState();
    var timer = setInterval(() => {
      if(comparePosition()) {
        clearInterval(timer)
        this.props.destroyEnemy()
        this.props.resetBulletState()
      }
      else if(verticalPosition() || this.bulletAtTop()){
        this.props.resetBulletState()
        clearInterval(timer)
      }
    }, 50)

  }

  bulletAtTop(){
    var bulletPosition = getPosition("bullet")
    var topWindowPosition = document.body.scrollTop
    bulletPosition.top == topWindowPosition
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
      <div onKeyDown={this.handleKeyDown} className="ship" id="ship" ref="ship1">
      </div>
    )
  }
};

export default SpaceShip;
