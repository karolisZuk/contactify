import React from 'react';
import '../styles/header/searchComponent.css';

const SearchComponent = (props) => {

    return (
        <div className="searchComponent">
            <div className="wrapper">
                <span className="fa fa-search searchIcon"></span>
                <input type="text" placeholder="Search"  className="searchField"  />
            </div>
         </div>
    )};

    export default SearchComponent;
