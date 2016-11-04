import React, { Component } from 'react';
import Bullet from './Bullet.js'

class SpaceShip extends Component {
  constructor(props) {
    super(props);
    this.state = {"bulletClass": "stable-bullet"}
    this.fire = this.fire.bind(this)
  }

  fire() {
    this.setState({"bulletClass": "moving-bullet"})
  }

  render(){
    return (
      <div onClick={this.fire} className="ship">
      <Bullet bulletClass={this.state.bulletClass} />
      </div>
    )
  }
};

export default SpaceShip;
