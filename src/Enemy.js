import React, { Component } from 'react';

class Enemy extends Component {
  render(){
    return (
      <div className={this.props.enemyClass} >
      </div>
    )
  }
};

export default Enemy;
