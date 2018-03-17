import React, { Component } from 'react';
import '../styles/content/usersTableComponent.css';
import ContactTableRow from './ContactTableRow';

class UsersTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sorted:false
  };
  }

  componentWillReceiveProps(props){
    this.setState({contacts:props.contacts});
  }

  sortByName(contacts){
      if(this.state.sorted) {
            //reverse Array.
        this.setState({
          contacts:contacts});
      }
      contacts.sort(((a,b) => {
        if(a.name < b.name) 
          return -1
        if(a.name > b.name)
          return 1;
        else 
          return 0;
      }));
    this.setState({
      contacts:contacts,
      sorted:true});
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

        headers.forEach(header => {
          if(header==='name'){
                tableHeaders.push(<th key={header} id="nameHeader">{header}<i className="fa fa-arrow-down" onClick={()=>this.sortByName(this.state.contacts)}></i></th>)
          }else tableHeaders.push(<th key={header}>{header}</th>)
        });

        tableData.forEach(contact => tableRows.push(
          <ContactTableRow 
          key={contact.id}
          active={contact.active}
          name={contact.name}
          surname={contact.surname} 
          city={contact.city}
          email={contact.email}
          phone={contact.phone}
          inspectContact={this.props.inspectContact}
          />));

    return (
      <div>
          <table id="contactsTable">
              <thead><tr>{tableHeaders}</tr></thead>
              <tbody> {tableRows} </tbody>
          </table>
        </div>
    );
  }
}

export default UsersTableComponent;