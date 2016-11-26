import React, { Component } from 'react';
import Bullet from './Bullet.js'

class SpaceShip extends Component {

  constructor(props) {
    super(props);
    this.state = {"bulletClass": "stable-bullet"}
    this.fire = this.fire.bind(this)
    this.comparePosition = this.comparePosition.bind(this)
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
      if(this.comparePosition()) {
        clearInterval(timer)
        this.props.destroyEnemy()
      }
      else if(this.getPosition("bullet").y < this.getPosition("enemy").y){
        clearInterval(timer)
      }
    }, 50)

   setTimeout(() => {
      this.setState({"bulletClass" : "stable-bullet"})
      clearInterval(timer)
    }, 502)
  }

  getPosition(enemyORBulletId){
    var enemyORBullet = document.getElementById(enemyORBulletId);
    var x = enemyORBullet.getBoundingClientRect().left
    var width = enemyORBullet.getBoundingClientRect().width
    var height = enemyORBullet.getBoundingClientRect().height
    var y = enemyORBullet.getBoundingClientRect().top
    return {"x": x, "y": y, "width": width, "height": height}
  }

  comparePosition(){
    return this.getPosition("bullet").y < this.getPosition("enemy").y && this.getPosition("bullet").x === this.getPosition("enemy").x
  }

  moveRight(){
    this.margin += 10
    this.refs.ship1.style.marginLeft = this.margin + "px"
  }

  moveLeft(){
    this.margin -= 10
    this.refs.ship1.style.marginLeft = this.margin + "px"
  }

  handleKeyDown(e){
    switch(e.keyCode){
      case 32:
        return this.fire();
        break;
      case 39:
        return this.moveRight();
        break;
      case 37:
        return this.moveLeft();
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
