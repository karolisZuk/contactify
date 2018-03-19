import React, { Component } from 'react';
import '../styles/content/toolbarComponent.css';

class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = val =>{
    this.props.sortByCity(val.target.value);
  }

  render(){
    return (
      <div className="toolbarComponent">
        <input type="text" placeholder="Name" className="inputField" />
        <label className="wrap">
        <select name="citiesSelect" 
                onChange={this.handleChange} >
            <option value="All" key="All" >All </option>   
            {this.props.cities.map(city => (
            <option value={city} key={city}>{city}</option>
          ))}
        </select>
        </label>
          <input type="checkbox" id="checkbox" label='checkbox' onChange={() => this.props.sortActive()} /><p>Show active</p>
        <button >Filter</button>
      </div>
    );
  }
}

export default ToolbarComponent;