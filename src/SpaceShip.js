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
      else if(this.bulletPosition().y < this.enemyPosition().y){
        clearInterval(timer)
      }
    }, 50)

   setTimeout(() => {
      this.setState({"bulletClass" : "stable-bullet"})
      clearInterval(timer)
    }, 800)
  }

  getPosition(enemyORBulletId){
    var enemyORBullet = document.getElementById(enemyORBulletId);
    var left = enemyORBullet.getBoundingClientRect().left
    var right = enemyORBullet.getBoundingClientRect().right
    var width = enemyORBullet.getBoundingClientRect().width
    var height = enemyORBullet.getBoundingClientRect().height
    var top = enemyORBullet.getBoundingClientRect().top
    return {"left": left, "y": top, "width": width, "height": height, "right": right}
  }

  comparePosition(){
    return this.verticalPosition() && this.horizontalPosition()

  }

  verticalPosition(){
    return this.bulletPosition().y < this.enemyPosition().y
  }

  horizontalPosition(){
    return (this.enemyPosition().right - this.bulletPosition().right >= 0 &&
          this.enemyPosition().right - this.bulletPosition().right <= 40) ||
          (this.enemyPosition().left - this.bulletPosition().left >= -30 &&
          this.enemyPosition().left - this.bulletPosition().left <= 10)
  }

  enemyPosition(){
    return this.getPosition("enemy")
  }

  bulletPosition(){
    return this.getPosition("bullet")
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
