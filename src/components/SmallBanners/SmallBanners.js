import React from 'react';
import { Link } from 'react-router-dom';
import './SmallBanners.css';

const SmallBanners = () => {
  return (
    <>
      <section id="sm-banner" className="section-p1">
        <div className="banner-box-1">
          <h4>Accessories available</h4>
          <h2>One Day Service</h2>
          <span>The best watch service done here</span>
          <Link to="/contact">
            <button className="white">Contact Us</button>
          </Link>
        </div>
        <div className="banner-box-1 banner-box-2">
          <h4>This Season</h4>
          <h2>New Watches</h2>
          <span>The best watches are on sale here</span>
          <Link to="/collection">
            <button className="white">Collection</button>
          </Link>
        </div>
      </section>
      <section id="banner3">
        <div className="banner-box-1 box-1">
          <h2>SEASONAL SALE</h2>
          <h3>Quartz watches</h3>
        </div>
        <div className="banner-box-1 box-2">
          <h2>New Movements</h2>
          <h3>Automatic and Mechanical</h3>
        </div>
        <div className="banner-box-1 box-3">
          <h2>Accessories</h2>
          <h3>NATO and mesh straps</h3>
        </div>
      </section>
    </>
  );
};

export default SmallBanners;
