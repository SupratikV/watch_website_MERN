import React from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import banerimage from "../components/img/banner/b10.jpg";
import './Blog.css'; // Import the CSS file

import video1 from './videos/video1.mp4';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import video4 from './videos/video4.mp4';

const Blog = () => {
  return (
    <div className="page-container">
      <header>
        {/* Your fixed header content goes here */}
      </header>

      <main>
        <TopBanner img={banerimage} heading="Read more" desc="Read All Case Studies for your Products" />
        
        <div className="video-container">
          <div className="video-wrapper">
            <video className="full-screen-video" controls autoPlay muted>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-wrapper">
            <video className="full-screen-video" controls autoPlay muted>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-wrapper">
            <video className="full-screen-video" controls autoPlay muted>
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-wrapper">
            <video className="full-screen-video" controls autoPlay muted>
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>

      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Blog;
