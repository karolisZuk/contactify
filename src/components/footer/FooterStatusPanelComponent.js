import React from 'react';
import FooterLastSyncComponent from './FooterLastSyncComponent';
import FooterHelpDeskComponent from './FooterHelpDeskComponent';
import '../styles/footer/footerStatusPanelComponent.css';

const FooterStatusPanel = (props) => {

    return (
        <div className="footerStatusPanelComponent">
            <FooterLastSyncComponent />
            <FooterHelpDeskComponent />
        </div>
    )};

    export default FooterStatusPanel;
