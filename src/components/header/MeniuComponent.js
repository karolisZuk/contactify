import React, { Component } from 'react';
import '../styles/header/meniuComponent.css';

class MeniuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false};
      }

      handleClick(item) { 
        this.setState({ active: item });
  }

  render() {
    const menuItems=['Dashboard','Contacts','Notifications'];
    const activeStyle = {
      backgroundColor: '#198593',
      color:'white',
      textTransform: 'uppercase',
      padding:'10px 25px 10px 25px',
      cursor:'pointer',
      boxShadow:'inset 0 0 2px #000000',
      borderTop:'1px solid #0aa3c1',
      borderBottom:'1px solid #0aa3c1'

    };
    const notActiveStyle={
      color:'white',
      textTransform: 'uppercase',
      padding:'10px 25px 10px 25px',
      cursor:'pointer',
      borderTop:'1px solid #0aa3c1',
      borderBottom:'1px solid #0aa3c1'
    }

    return (
      <div className="meniuComponent">
      {menuItems.map(menuItem => 
        <div key={menuItem}
         style={this.state.active === menuItem ? activeStyle : notActiveStyle} 
         onClick={this.handleClick.bind(this, menuItem)}> {menuItem} </div>
     )}
      </div>

    );
  }
}

export default MeniuComponent;