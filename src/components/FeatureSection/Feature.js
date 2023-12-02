import React from 'react'
import './Feature.css'
import '../mediaQueries/mediaQueries.css'
import {FeatureProducts} from '../../data'

const Feature = () => {
  return (
    <section id="feature" className="section-p1">
        {FeatureProducts.map((feature)=>(
        <div className="fe-box" key={feature.id}>
        <img src={feature.img} alt="" />
        <h6>{feature.heading}</h6>
      </div>
      ))}
      </section>
  )
}

export default Feature
