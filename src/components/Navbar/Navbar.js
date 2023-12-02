import './Navbar.css'
import '../mediaQueries/mediaQueries.css'
import { NavLink} from "react-router-dom";
import { useState } from 'react'



const Navbar = () => {
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);

  }

  return (
    <section id="header">
    <NavLink to='/'><img src='../img/logo.png' className="logo" alt="" /></NavLink>

    <div id={toggle ? "navbar mobile-menu-link" : "navbar"}>
      
      <ul >
      
        <li><NavLink  activeClassName="active"  className="links"   to="/">Home</NavLink></li>
        <li><NavLink  activeClassName="active"  className="links" to="/shop">Shop</NavLink></li>
        <li><NavLink  activeClassName="active"  className="links" to="/blog">Blog</NavLink></li>
        <li><NavLink   activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink  activeClassName="active"  to="/contact">Contact</NavLink></li>
        <li><NavLink  activeClassName="active"  to="/login">Login</NavLink></li>
        <li>
          <a id="Shopping-bag" href="cart.html"><i className="fal fa-shopping-bag"></i></a>
        </li>
        <NavLink to="" id="close"><i className="far fa-times"></i></NavLink>
      </ul>
      
    
    <div id="humburger">
      <a href="cart.html"><i className="fal fa-shopping-bag"></i></a>
      <i id="bar" className="fas fa-bars" onClick={handleToggle}></i>
    </div>
  </div>
    
  </section>
  )
}

export default Navbar
