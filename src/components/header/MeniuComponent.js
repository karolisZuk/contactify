import React, { Component } from 'react';
import '../styles/header/meniuComponent.css';

class MeniuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  render() {
    return (
      <div className="meniuComponent">
            <h2 >Button1</h2>
            <h2>Button2</h2>
            <h2>Button3</h2>
      </div>
    );
  }
}

export default MeniuComponent;