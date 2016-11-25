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

  componentWillUpdate(){
    return console.log(this.comparePosition())
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
    var enemy = this.getPosition("enemy")
    var bullet = this.getPosition("bullet")
    return (
        ((enemy.y + enemy.height) < bullet.y)|| enemy.y > (bullet.y + bullet.height) ||
        ((enemy.x + enemy.width) < bullet.x) || (enemy.x > (bullet.x + bullet.width))
    )
  }

  checkCollision(){

  }

  render(){
    return (
    <div>
      <SpaceShip bulletClass={this.state.bulletClass} destroyEnemy={this.destroyEnemy} />
      <Enemy enemyClass={this.state.enemyClass}/>
    </div>
    )
  }
};

export default Game;
