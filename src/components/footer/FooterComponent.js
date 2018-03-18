import React from 'react';
import '../styles/footer/footerComponent.css';
import FooterCopyrightComponent from './FooterCopyrightComponent';
import FooterStatusPanelComponent from './FooterStatusPanelComponent';
import FooterLinksPanelComponent from './FooterLinksPanelComponent';

const FooterComponent = (props) => {
    let copyrightLinks={
        'Dashboard':'/dashboard',
        'Contacts':'/contacts',
        'Notifications':'/notifications'
        }

    let otherLinks={
        'Groups':'/groups',
        'Frequently contacted':'/frequently_contacted',
        'Preferences':'/preferences',
        'Log out':'/logout'
        }

    return (
        <div className="footerComponent">
            <FooterCopyrightComponent links={copyrightLinks} />
            <FooterStatusPanelComponent />
            <FooterLinksPanelComponent links={otherLinks} />
         </div>
    )};

    export default FooterComponent;
