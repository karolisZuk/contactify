import React, { Component } from 'react';
import '../styles/mainComponent.css';

class MainComponent extends Component {
  render() {
    return (
      <div className="mainComponent">
            <h1>This is main</h1>
            <p>will hold state for jsx call, pass props to table for displaying, also will update contact info based on number pressed</p>
      </div>
    );
  }
}

export default MainComponent;