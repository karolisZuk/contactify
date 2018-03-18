import React from 'react';
import '../styles/footer/footerlinksPanelComponent.css';

const FooterLinksPanelComponent = (props) => {

    return (
        <div className="footerLinksPanelComponent">
        {Object.keys(props.links).map(function(key) {
            return <a href={props.links[key]} key={key}>{key}</a>;
        })}
         </div>
    )};

    export default FooterLinksPanelComponent;
