import React, { Component } from 'react';
import '../styles/content/toolbarComponent.css';

class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = val =>{
    this.props.sortByCity(val.target.value);
  }

  handleNameChange=(event)=> {
    this.setState({value: event.target.value});
    this.props.sortByName(event.target.value);
  }

  render(){
    return (
      <div className="toolbarComponent">
        <div className="wrapper">
        <input type="text" placeholder="Name"  className="inputField" 
        value={this.props.nameValue} onChange={this.handleNameChange} />
        </div>
        <label className="wrap">
        <div className="wrapper">
        <select name="citiesSelect" 
                onChange={this.handleChange} >
            <option value="All" key="All" >All </option>   
            {this.props.cities.map(city => (
            <option value={city} key={city}>{city}</option>
          ))}
        </select>
        </div>
        </label>
          <input type="checkbox" id="checkbox" label='checkbox' onChange={() => this.props.sortActive()} /><p>Show active</p>
          <div id="addNewBtn"><i className="fa fa-plus"></i>Add new contract</div>
          </div>
    );
  }
}

export default ToolbarComponent;