import React, { Component } from 'react';
import '../styles/content/usersTableComponent.css';
import ContactTableRow from './ContactTableRow';

class UsersTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }

  componentWillReceiveProps(props){
    this.setState({contacts:props.contacts});
    this.setState({sorted:props.sorted});
  }

  renderPointer(){
    if(this.state.sorted){
      return (<i className="fa fa-arrow-down" onClick={()=>this.props.sortByName(this.state.contacts)}></i>)
    }else {
      return (<i className="fa fa-arrow-up" onClick={()=>this.props.sortByName(this.state.contacts)}></i>)
    }
  }

  render() {

    let tableHeaders=[];
    let tableRows = [];

    let headers = Object.keys(this.props.contacts[0]);
    var index = headers.indexOf('id');
    if (index !== -1) {
       headers.splice(index, 1);
    }  

        headers.forEach(header => {
          if(header==='name'){
                tableHeaders.push(<th key={header} id="nameHeader">{header}{this.renderPointer()}</th>)
          }else if(header==='active'){
              tableHeaders.push(<th key='widgets' id="widgetsHeader"> </th>)
          }else tableHeaders.push(<th key={header}>{header}</th>)
        });

        this.state.contacts.forEach(contact => tableRows.push(
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