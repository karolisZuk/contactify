import React, { Component } from 'react';
import '../styles/content/contactInfoComponent.css';

class ContactInfoComponent extends Component {
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
      <div className="contactInfoComponent">
        <div id="userImage"></div>
        <div id="contactText">
            <p>Name:{this.state.name}</p>
            <p>Surname:{this.state.surname}</p>
            <p>City:{this.state.city}</p>
            <p>Email:{this.state.email}</p>
            <p>Phone:{this.state.phone}</p>
        </div>
      </div>
    );
  }
}

export default ContactInfoComponent;