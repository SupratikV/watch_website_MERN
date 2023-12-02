import React from 'react'
import NewArrival from '../components/NewArrivalSection/NewArrival'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import TopBanner from '../components/TopBanner/TopBanner'

const Shop = () => {
  return (
    <>
     <TopBanner heading="Find the right watch for you" desc ="Fast ,Free and Safe shipping"/>
     <ProductsSection/>
     <NewArrival/>
    </>
  )
}

export default Shop
