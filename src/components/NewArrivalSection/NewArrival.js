import React from 'react'
import './NewArrival.css'
import '../mediaQueries/mediaQueries.css'
import { NewArrivals } from '../../data'
import { Link} from "react-router-dom";
const NewArrival = () => {
  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        {NewArrivals.map((product)=>(
        <div className="pro" key={product.id}>
          <img src={product.img} alt="" />

          <div className="des">
            <span>{product.brand}</span>
            <h5>{product.name}</h5>
            <div className="star">
              {product.star}
              {product.star}
              {product.star}
              {product.star}
              {product.star}
            </div>
            <h4>{product.price}</h4>
          </div>
          <Link to="/cart">{product.cart}</Link>
        </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrival
