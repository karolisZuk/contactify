import React from 'react';
import '../styles/footer/footerCopyrightComponent.css';

const FooterCopyrightComponent = (props) => {
    
    return (
        <div className="footerCopyrightComponent">
        {Object.keys(props.links).map(function(key) {
            return <a href={props.links[key]}>{key}</a>;
        })}
          </div>
    )};

    export default FooterCopyrightComponent;
