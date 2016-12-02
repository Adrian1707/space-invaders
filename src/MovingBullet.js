import React, { Component } from 'react'

class MovingBullet extends Component {

  render(){
    return (
    <div className={this.props.bulletClass} id="bullet">
    </div>
    )
  }
}

export default MovingBullet;
