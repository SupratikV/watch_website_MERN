import React from 'react'
import './NewsLetter.css'
import '../mediaQueries/mediaQueries.css'

const NewsLetter = () => {
  return (
    <section id="newsLetter"  className="section-p1 section-m1">
      <div className="newstext">
        <h4>Singn Up for Newsletters</h4>
        <p>Get Email updates about our latest shop and <span> special offers</span></p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your Email address"/>
        <button className="normal">Sign Up</button>
      </div>


    </section>
  )
}

export default NewsLetter
