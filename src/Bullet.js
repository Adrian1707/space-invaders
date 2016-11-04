import React, { Component } from 'react';

class Bullet extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className={this.props.bulletClass}>
      </div>
    )
  }
};

export default Bullet;
