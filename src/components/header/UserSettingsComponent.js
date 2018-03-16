import React, { Component } from 'react';
import '../styles/header/userSettingsComponent.css';

class UserSettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  togglePanel(){
    this.setState({expanded:!this.state.expanded});
  }

  mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }

  render() {
    const userMenuItems={
      'Groups':'fa fa-users',
      'Frequently contacted':'fa fa-comments',
      'Preferences':'fa fa-wrench',
      'Log out':'fa fa-power-off'
    };

    return (
      <div>
      <div className="userSettingsComponent" onClick={this.togglePanel.bind(this)}>
      <i className="fa fa-user"></i><p>Jorah Mormont</p><i className="fa fa-caret-down"></i>
      </div>
      {this.state.expanded?
      <div id='userSettingsPopup'><ul>
      {this.mapObject(userMenuItems, function (key, value) {
        return <li key={value} ><i className= {value}></i>{key}</li>
      })}
      </ul>
      </div>: <div></div>}

      </div>
    );
  }
}

export default UserSettingsComponent;