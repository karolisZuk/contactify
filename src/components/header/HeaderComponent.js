import React, { Component } from 'react';
import '../styles/header/headerComponent.css';
import Meniu from './MeniuComponent';
import Logo from './LogoComponent';
import UserSettingsComponent from './UserSettingsComponent';
import SearchComponent from './SearchComponent';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerComponent">
            <Logo />
            <Meniu />
            <SearchComponent />
            <UserSettingsComponent />
      </div>
    );
  }
}

export default HeaderComponent;