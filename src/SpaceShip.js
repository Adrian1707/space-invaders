import React, { Component } from 'react';
import Bullet from './Bullet.js'

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
    setTimeout(() => {
      this.setState({"bulletClass" : "stable-bullet"})
    }, 502)
    setTimeout(() => {
      this.props.destroyEnemy()
    }, 350)
  }

  moveRight(){
    this.margin += 2
    this.refs.ship1.style.marginLeft = this.margin + "%"
  }

  moveLeft(){
    this.margin -= 5
    this.refs.ship1.style.marginRight = this.margin + "%"
  }

  handleKeyDown(e){
    switch(e.keyCode){
      case 32:
        this.fire()
        break;
      case 37:
        this.moveLeft()
      case 39:
        this.moveRight()
    }
  }

  render(){
    return (
      <div onClick={this.fire} onKeyDown={this.handleKeyDown} className="ship" id="ship" ref="ship1">
        <Bullet bulletClass={this.state.bulletClass} />
      </div>
    )
  }
};

export default SpaceShip;
