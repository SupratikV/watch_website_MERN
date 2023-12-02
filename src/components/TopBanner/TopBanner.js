import React from 'react'
import './TopBanner.css'
const TopBanner = ({heading,desc}) => {


  return (
    <section id="page-header">
      <h2>{heading}</h2>
      <p>{desc}</p>
    </section>

  )
}

export default TopBanner
