import React, { Component } from 'react';
import SpaceShip from './SpaceShip.js'
import Enemy from './Enemy.js'
import MovingBullet from './MovingBullet.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {"enemyClass": "enemy-alive", "bulletClass": "stable-bullet", "bulletMoving": false}
    this.destroyEnemy = this.destroyEnemy.bind(this)
    this.changeMovingBulletState = this.changeMovingBulletState.bind(this)
    this.resetBulletState = this.resetBulletState.bind(this)
  }

  destroyEnemy(){
    this.setState({"enemyClass": "enemy-dead"})
  }

  changeMovingBulletState(){
    this.setState({"bulletMoving": true})
  }

  resetBulletState(){
    this.setState({"bulletMoving": false})
  }

  render(){
    return (
    <div>
      <SpaceShip bulletClass={this.state.bulletClass} destroyEnemy={this.destroyEnemy} changeMovingBulletState={this.changeMovingBulletState} resetBulletState={this.resetBulletState} />
      <Enemy enemyClass={this.state.enemyClass}/>
      <MovingBullet bulletClass={this.state.bulletMoving ? "moving-bullet" : "hiding-bullet"} />
    </div>
    )
  }
};

export default Game;
