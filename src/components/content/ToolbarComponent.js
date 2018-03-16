import React, { Component } from 'react';
import '../styles/content/toolbarComponent.css';

class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      surname:this.props.surname,
      city:this.props.city,
      email:this.props.email,
      phone:this.props.phone
    };
  }

  render() {
    return (
      <div className="toolbarComponent">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="City" />
        <input type="checkbox" /><p>Show active</p>
        <button >Filter</button>
      </div>
    );
  }
}

export default ToolbarComponent;