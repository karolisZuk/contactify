import React, { Component } from 'react';
import '../styles/content/mainComponent.css';
import ContactInfoComponent from './ContactInfoComponent';
import ToolbarComponent from './ToolbarComponent';
import UsersTableComponent from './UsersTableComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: ' '};
  }

componentWillMount(){
  const API = './contacts.json';
  fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }));
}


  render() {
    return (
      <div className="mainComponent">
            <ToolbarComponent />
            <div className="contactPanel">
              <ContactInfoComponent />
              <UsersTableComponent contacts={this.state.contacts} />
            </div>
      </div>
    );
  }
}

export default MainComponent;