import React from 'react';
import './HomeLayout.css';

import img1 from './images/2026-04-22_15-13-45.png';
import img2 from './images/2026-04-22_15-14-45.png';
import img3 from './images/2026-04-22_15-16-10.png';
import img4 from './images/2026-04-22_15-16-28.png';
import img5 from './images/2026-04-22_15-16-43.png';
import img8 from './images/2026-04-22_15-17-41.png';
import img10 from './images/2026-04-22_15-18-42.png';
import img11 from './images/2026-04-22_15-19-00.png';
import img12 from './images/2026-04-22_15-27-35.jpg';

const HomeLayout = () => {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        
        <div className="header-section">
          <img src={img1} alt="header" className="img-contain" />
        </div>

        <div className="main-section">
          
          <div className="left-content">
             <img src={img2} alt="left-1" className="img-full" />
             <img src={img3} alt="left-2" className="img-full" />
          </div>

          <div className="right-sidebar">
             <img src={img4} alt="left-3" className="img-full" />
             <img src={img5} alt="right-1" className="img-full" />
             <img src={img8} alt="right-2" className="img-full" />
          </div>

        </div>


        <div className="banner-section">
          <img src={img10} alt="bottom-banner-3" className="img-banner" />
        </div>

        <div className="footer-section">
          <img src={img11} alt="footer-1" className="img-contain" />
          <img src={img12} alt="footer-2" className="img-contain" />
        </div>

      </div>
    </div>
  );
};

export default HomeLayout;
