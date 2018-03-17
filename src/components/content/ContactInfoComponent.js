import React, { Component } from 'react';
import '../styles/content/contactInfoComponent.css';

class ContactInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname:'',
      city:'',
      email:'',
      phone:''
    }
  }

  componentWillReceiveProps(props){
    if(props.selectedContact!=null){
    this.setState({name:props.selectedContact.name});
    this.setState({surname:props.selectedContact.surname});
    this.setState({city:props.selectedContact.city});
    this.setState({email:props.selectedContact.email});
    this.setState({phone:props.selectedContact.phone});
    }
  }

  render() {
    return (
      <div className="contactInfoComponent">
        <div id="userImage"></div>
        <div style={{display:'flex'}}>
        <div id="contactText">
            <p>Name:</p>
            <p>Surname:</p>
            <p>City:</p>
            <p>Email:</p>
            <p>Phone:</p>
        </div>
        <div id="contactValues">
        <p>{this.state.name}</p>
        <p>{this.state.surname}</p>
        <p>{this.state.city}</p>
        <p><a href={'mailto://'+this.state.email}>{this.state.email}</a></p>
        <p>{this.state.phone}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default ContactInfoComponent;