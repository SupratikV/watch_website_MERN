import React from 'react'
import { Products } from '../../data'
import './ProductsSection.css'
import '../mediaQueries/mediaQueries.css'
import { Link} from "react-router-dom";
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';



const ProductsSection = () => {
  const dispatch = useDispatch();
  const handleAdd = (product) =>{
    dispatch(add(product));
  }
  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        {Products.map((product)=>(
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
          <a onClick={()=> handleAdd(product)}>{product.cart}</a>
        </div>
        ))}
      </div>
    </section>
    
  )
}

export default ProductsSection
