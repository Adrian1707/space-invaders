import React, { Component } from 'react';
import Bullet from './Bullet.js'

class SpaceShip extends Component {

  constructor(props) {
    super(props);
    this.state = {"bulletClass": "stable-bullet"}
    this.fire = this.fire.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
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

  handleKeyDown(e){
    if(e.keyCode == 32){
      this.fire()
    }
  }

  render(){
    return (
      <div onClick={this.fire} onKeyDown={this.handleKeyPress} className="ship">
        <Bullet bulletClass={this.state.bulletClass} />
      </div>
    )
  }
};

export default SpaceShip;
