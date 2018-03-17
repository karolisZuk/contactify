import React from 'react';
import '../styles/footerComponent.css';

const ContactTableRow = (props) => {

    return (
      
      <tr onClick={() => {props.inspectContact(props)}}>
          <td>{props.active?<i className="fa fa-eye"></i>:<i className="fa fa-eye-slash"></i>}{props.name}</td>
          <td>{props.surname}</td>
          <td>{props.city}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.activity}</td>
        </tr>
    )};


export default ContactTableRow;