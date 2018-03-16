import React, { Component } from 'react';
import '../styles/content/usersTableComponent.css';
import ContactTableRow from './ContactTableRow';

class UsersTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
  };
  }

  componentWillReceiveProps(props){
    this.setState({contacts:props.contacts});
  }

  render() {

    let tableHeaders=[];
    let tableRows = [];
    let tableData=this.state.contacts;

    let headers = Object.keys(this.props.contacts[0]);
    var index = headers.indexOf('id');
    if (index !== -1) {
       headers.splice(index, 1);
    }  

        headers.forEach(header => tableHeaders.push(<th key={header}>{header}</th>));
        tableData.forEach(contact => tableRows.push(
          <ContactTableRow 
          active={contact.active}
          name={contact.name}
          surname={contact.surname} 
          city={contact.city}
          email={contact.email}
          phone={contact.phone}
          />));

    return (
          <table id="contactsTable">
              <thead><tr>{tableHeaders}</tr></thead>
              <tbody> {tableRows} </tbody>
          </table>
    );
  }
}

export default UsersTableComponent;