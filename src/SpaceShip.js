import React, { Component } from 'react';
import Bullet from './Bullet.js'

class SpaceShip extends Component {
  constructor(props) {
    super(props);
    this.fire = this.fire.bind(this)
  }

  fire() {

  }

  render(){
    return (
      <div onClick={this.fire}className="ship">
      HI!
      <Bullet />
      </div>
    )
  }
};

export default SpaceShip;
