import React from 'react';
import './AboutSection.css';
import '../mediaQueries/mediaQueries.css';

const AboutSection = () => {
  return (
    <>
      <section id="about-head" className="section-p1">
        <img src="../img/about/a2.jpg" alt="" />
        <div>
          <h2>Who We Are</h2>
          <p>We are a group of enthusiastic students passionate about crafting exceptional digital experiences. Our journey began with a shared goal: to explore the endless possibilities of web technology.
            Driven by curiosity and creativity, we embark on this adventure to create innovative web solutions. Our team brings together diverse skills in design, coding, and problem-solving, allowing us to build user-friendly applications.
            We believe in the power of simplicity and functionality. Our focus is on creating web applications that are not just visually appealing but also intuitive and easy to use.
            Continuous learning is at the core of our approach. We embrace challenges as opportunities for growth, constantly refining our skills and techniques.
            Our mission is simple: to develop smart and practical web solutions that make a difference. We're excited to be on this journey, exploring, learning, and creating digital experiences that matter.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="section-p1">
        <div className="outer-container">
          <div className="custom-container">
            <div className="item">
              <span className="bold">Thaman Nutakki</span>
              <span>PES1UG22CS656</span>
              <span>70224 99828</span>
            </div>
            <div className="item">
              <span className="bold">Supratik Vishnu</span>
              <span>PES1UG22CS631</span>
              <span>86600 64191</span>
            </div>
            <div className="item">
              <span className="bold">Vishwas</span>
              <span>PES1UG22CS665</span>
              <span>99457 92586</span>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="about-app" className="section-p1">
        <div className="video">
          <video autoPlay muted loop src="../img/about/1.mp4"></video>
        </div>
      </section>
    </>
  )
}

export default AboutSection;
