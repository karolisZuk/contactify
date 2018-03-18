import React from 'react';
import '../styles/footer/footerCopyrightComponent.css';

const FooterCopyrightComponent = (props) => {
    
    return (
        <div className="footerCopyrightComponent">
            <div id='primaryLinks'>
                {Object.keys(props.links).map(function(key) {
                    return <a href={props.links[key]} key={key}>{key}</a>;
                })}
            </div>
        <p id='copy'>	&copy; 2015 Contactify <a href='/about'>About</a> <a href='/privacy'>Privacy</a></p>
          </div>
    )};

    export default FooterCopyrightComponent;
