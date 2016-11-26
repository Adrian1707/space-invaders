import React, { Component } from 'react';
import SpaceShip from './SpaceShip.js'
import Enemy from './Enemy.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {"enemyClass": "enemy-alive", "bulletClass": "stable-bullet"}
    this.destroyEnemy = this.destroyEnemy.bind(this)
  }

  destroyEnemy(){
    this.setState({"enemyClass": "enemy-dead"})
  }


  render(){
    return (
    <div>
      <SpaceShip  bulletClass={this.state.bulletClass} destroyEnemy={this.destroyEnemy} />
      <Enemy enemyClass={this.state.enemyClass}/>
    </div>
    )
  }
};

export default Game;
