import React from 'react';
import './ContactSection.css';
import pesImage from './pes1.jpg';

const ContactSection = () => {
  return (
    <>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <ul>
              <li>
                <i className="fal fa-map"></i>
                <p>100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar</p>
              </li>
              <li>
                <i className="fal fa-envelope"></i>
                <p>admissions@pes.edu</p>
              </li>
              <li>
                <i className="fal fa-phone-alt"></i>
                <p>80102 97297</p>
              </li>
              <li>
                <i className="fal fa-clock"></i>
                <p>10am-5pm Monday-Friday</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <img src={pesImage} alt="Map" />
        </div>
      </section>

      <section id="form-details">

        <form action="">
          <span>Leave a message</span>
          <h2>We Love to hear from you</h2>
          <input type="text" placeholder="Your name"/>
          <input type="email" placeholder="Your Email"/>
          <input type="text" placeholder="Subject Line"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="../img/people/1.png" alt=""/>
            <p><span>Thaman N</span>Web developer<br/>Phone: 70224 99828<br/>Email: contact@pes.gmail.com</p>
          </div>
          <div>
            <img src="../img/people/2.png" alt=""/>
            <p><span>Supratik V</span>Web developer<br/>Phone: 86600 64191<br/>Email: contact@pes.gmail.com</p>
          </div>
          <div>
            <img src="../img/people/3.png" alt=""/>
            <p><span>Vishwas</span>Web developer<br/>Phone: 99457 92586<br/>Email: contact@pes.gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
