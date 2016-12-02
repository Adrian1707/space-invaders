import React, { Component } from 'react';

class Enemy extends Component {
  render(){
    return (
      <div className={this.props.enemyClass} id="enemy" >
      </div>
    )
  }
};

export default Enemy;
