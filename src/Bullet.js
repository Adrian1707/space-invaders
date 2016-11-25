import React, { Component } from 'react';

class Bullet extends Component {


  render(){
    return (
      <div className={this.props.bulletClass} id="bullet">
      </div>
    )
  }
};


export default Bullet;
