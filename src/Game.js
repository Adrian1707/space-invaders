import React, { Component } from 'react';
import SpaceShip from './SpaceShip.js'
import Enemy from './Enemy.js'
import MovingBullet from './MovingBullet.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {"enemyClass": "enemy-alive", "bulletClass": "stable-bullet", "bulletMoving": false}
    this.destroyEnemy = this.destroyEnemy.bind(this)
    // this.renderMovingBullet = this.renderMovingBullet.bind(this)
    this.changeMovingBulletState = this.changeMovingBulletState.bind(this)
  }

  destroyEnemy(){
    this.setState({"enemyClass": "enemy-dead"})
  }

  // renderMovingBullet(){
  //   console.log("EFOIHOWIEHV")
  //   if(this.state.bulletMoving){
  //     return (
  //       <MovingBullet />
  //     )
  //   }
  //    else{
  //     return ""
  //    }
  // }

  changeMovingBulletState(){
    this.setState({"bulletMoving": true})
  }

  render(){
    return (
    <div>
      <SpaceShip bulletClass={this.state.bulletClass} destroyEnemy={this.destroyEnemy} changeMovingBulletState={this.changeMovingBulletState} />
      <Enemy enemyClass={this.state.enemyClass}/>
      {renderIf(this.state.bulletMoving)(
        <MovingBullet />
      )}
    </div>
    )
  }
};

export default Game;
