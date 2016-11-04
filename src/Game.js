import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {'bullets': 10};
    this.handleClick = this.handleClick.bind(this);
  }

  shoot(){
    return (this.setState({'bullets': this.state.bullets -1 }))
  }

  displayBullets(){
    return (this.state.bullets)
  }

  handleClick() {
    this.shoot();
  }

  render(){
    return (
    <div onClick={this.handleClick}>{this.displayBullets} I am game!</div>
    )
  }
};

export default Game;
