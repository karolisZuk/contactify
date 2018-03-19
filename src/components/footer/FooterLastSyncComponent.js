import React from 'react';
import '../styles/footer/footerLastSyncComponent.css';

const FooterLastSyncComponent = (props) => {

let date = new Date();
let dd = date.getDate();
let mm = date.getMonth()+1;
let yyyy = date.getFullYear();
let hh = date.getHours();
let min = date.getMinutes();
let ss = date.getSeconds();

if(mm<10) {mm = '0'+mm;} 
if(ss<10){ss = '0'+ss;}
if(min<10){min = '0'+min;}

let dateString= yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + ':' + ss;

    return (
        <div className="footerLastSyncComponent">
            <i className="fa fa-cloud-download"></i>
            <span className='block'>
                <p>Last synced:</p>
                <p>{dateString}</p>
            </span>
            <span className='force'>
            <i className="fa fa-recycle"></i><a href='/force'>Force sync</a>
            </span>

         </div>
    )};

    export default FooterLastSyncComponent;
