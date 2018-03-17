import React, { Component } from 'react';
import '../styles/content/mainComponent.css';
import ContactInfoComponent from './ContactInfoComponent';
import ToolbarComponent from './ToolbarComponent';
import UsersTableComponent from './UsersTableComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: 'Something went wrong. Sorry.:('};
  }

componentWillMount(){
  const API = './contacts.json';
  fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }));
}

selectContact(contact){
  this.setState({selectContact:contact});
}


  render() {
    return (
      <div className="mainComponent">
            <ToolbarComponent />
            <div className="contactPanel">
              <ContactInfoComponent selectedContact={this.state.selectContact} />
              <UsersTableComponent contacts={this.state.contacts} inspectContact={this.selectContact.bind(this)} />
            </div>
      </div>
    );
  }
}

export default MainComponent;