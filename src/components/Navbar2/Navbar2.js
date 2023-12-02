import React from 'react'
import './Navbar2.css'
import { NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';


const Navbar2 = () => {
    const [click, setClick] = React.useState(false);
    const items = useSelector((state) => state.cart);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           <img src='../img/logo.png' className="logo" alt="" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/collection"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Collection
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Shop
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Login
              </NavLink>
            </li>
          </ul>
          {/* cart icon */}
           {/* <div className='cart-icon'><NavLink id="Shopping-bag" to='/cart'><i className="fal fa-shopping-bag"></i> {items.length}</NavLink>
           </div>  */}
           <div className='cart-icon'>
            <NavLink to='/cart'>
            <i className="fal fa-shopping-bag"></i>
          <span class='badge badge-warning' id='lblCartCount'> {items.length}</span></NavLink>
           </div> 

           {/* humenuebargr */}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  )
}

export default Navbar2
