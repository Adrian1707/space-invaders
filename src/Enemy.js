import React, { Component } from 'react';

class Enemy extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className={this.props.enemyClass} >
      </div>
    )
  }
};

export default Enemy;
