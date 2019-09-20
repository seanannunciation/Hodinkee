import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import HShop from './HShop';
import Share from './Share';
import EmailInput from './EmailInput';
import bg2440 from './images/bg-2440.jpg';
import bg1440 from './images/bg-1440.jpg';
import bg720 from './images/bg-720.jpg';
import bgMobile from './images/bg-mobile.jpg';
import logo from './images/logo.png';
import './index.css';

const App = () => {

  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const image = window.innerWidth >= 1440 ? bg2440 : window.innerWidth >= 720 && window.innerWidth <= 1440 ? bg1440 :
    window.innerWidth >= 400 && window.innerWidth <= 720 ? bg720 : bgMobile;

  const windowResize = () => {
       setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
       window.addEventListener('resize', windowResize);

       return () => {
           window.removeEventListener('resize', windowResize);
       }
   });

  return (
    <div className="display" style={{backgroundImage: `url(${image})`}}>
      <div>
        <HShop></HShop>
        <Share></Share>
        <div className="icon">
          <div className="logo-img">
            <img src={logo}/>
          </div>
          <p className="dateText">Coming 06.26.19</p>
          <EmailInput></EmailInput>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render( <App />, document.querySelector('#root'));
