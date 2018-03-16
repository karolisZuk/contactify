import React, { Component } from 'react';
import '../styles/header/headerComponent.css';
import Meniu from './MeniuComponent';
import Logo from './LogoComponent';
import UserSettingsComponent from './UserSettingsComponent';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerComponent">
            <Logo />
            <Meniu />
            <UserSettingsComponent />
      </div>
    );
  }
}

export default HeaderComponent;