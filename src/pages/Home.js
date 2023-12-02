import React from 'react'
import Hero from '../components/HeroSection/Hero'
import Feature from '../components/FeatureSection/Feature'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import Banner from '../components/BannerSection/Banner'
import NewArrival from '../components/NewArrivalSection/NewArrival'
import SmallBanners from '../components/SmallBanners/SmallBanners'
const Home = () => {
  return (
    <>
     <Hero/> 
     <Feature/>
     <ProductsSection/>
     <Banner/>
     <NewArrival/>
     <SmallBanners/>
    </>
  )
}

export default Home
