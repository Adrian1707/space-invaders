import React, { Component } from 'react';

class Enemy extends Component {
  constructor(props) {
    super(props);
    this.state = {"bulletClass": "stable-bullet"}
  }

  render(){
    return (
      <div onClick={this.fire} className="ship">
        <Bullet bulletClass={this.state.bulletClass} />
      </div>
    )
  }
};

export default SpaceShip;
