import React, { Component } from 'react';
import '../styles/content/mainComponent.css';
import ContactInfoComponent from './ContactInfoComponent';
import ToolbarComponent from './ToolbarComponent';
import UsersTableComponent from './UsersTableComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: ' ',
      sorted:false};
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

reverseList(contacts){
  let reversedList=[];
  for(let i=contacts.length-1; i>-1; i--){
    reversedList.push(contacts[i]);
  }
  return reversedList;
}

sortAlphabeticaly(contacts){
  contacts.sort(((a,b) => {
    if(a.name < b.name) 
      return -1
    if(a.name > b.name)
      return 1;
    else 
      return 0;
  }));
  return contacts;
}

sortByName(contacts){
    if(this.state.sorted) {
      contacts=this.reverseList(contacts);
      this.setState({sorted:false});
    } else if (!this.state.sorted){
      contacts=this.sortAlphabeticaly(contacts);
      this.setState({sorted:true});
    }
  this.setState({contacts:contacts});
}

  render() {
    let sel={};
    return (
      <div className="mainComponent">
            <ToolbarComponent />
            <div className="contactPanel">
              <ContactInfoComponent selectedContact={this.state.selectContact} />
              <UsersTableComponent 
                contacts={this.state.contacts} 
                inspectContact={this.selectContact.bind(this)} 
                sortByName={this.sortByName.bind(this)}
                sorted={this.state.sorted} />
            </div>
      </div>
    );
  }
}

export default MainComponent;