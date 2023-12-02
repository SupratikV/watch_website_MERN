import React from 'react'
import './Banner.css'
import '../mediaQueries/mediaQueries.css'

const Banner = () => {
  return (
    <section id="banner" className="section-m1">
      <h4>Repair Services</h4>
      <h2>Up to <span> 20% off</span> on watches out of warranty</h2>
      <button className="normal">Contact Us</button>
    </section>
  )
}

export default Banner
