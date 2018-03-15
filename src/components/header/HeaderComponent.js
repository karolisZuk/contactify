import React, { Component } from 'react';
import '../styles/header/headerComponent.css';
import Meniu from './MeniuComponent';
import Logo from './LogoComponent';

class HeaderComponent extends Component {
  render() {
    return (
      <div class="headerComponent">
            <Logo />
            <Meniu />
      </div>
    );
  }
}

export default HeaderComponent;