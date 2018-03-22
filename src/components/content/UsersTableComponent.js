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
    this.setState({
      contacts:props.contacts,
      headers:props.headers,
      sorted:props.sorted
    });
  }

  renderPointer(){
    if(this.state.sorted){
      return (<i className="fa fa-arrow-down" onClick={()=>this.props.sortByAlphabet(this.state.contacts)}></i>)
    }else {
      return (<i className="fa fa-arrow-up" onClick={()=>this.props.sortByAlphabet(this.state.contacts)}></i>)
    }
  }

  renderTableRow(){
    if(this.state.contacts){
    let tableRows = [];
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
      return tableRows;
    }
  }

  renderTableHeader(){
    if(this.state.headers){
      let tableHeaders=[];
      let headers = this.state.headers;
        headers.forEach(header => {
          if(header==='name'){
                tableHeaders.push(<th key={header} id="nameHeader">{header}{this.renderPointer()}</th>)
          }else if(header==='active'){
              tableHeaders.push(<th key='widgets' id="widgetsHeader"> </th>)
          }else tableHeaders.push(<th key={header}>{header}</th>)
        });
      return (<thead><tr>{tableHeaders}</tr></thead>);
    }
  }

  render() {

    return (
      <div>
          <table id="contactsTable">
              {this.renderTableHeader()}
              <tbody> {this.renderTableRow()} </tbody>
          </table>
        </div>
    );
  }
}

export default UsersTableComponent;