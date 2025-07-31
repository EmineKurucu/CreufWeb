import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="appNavbar">
      <div className="appHeader">
        <span className="navbarLogo">UWBix</span>
      </div>
      <a className="appHeader"></a>
      <ul className="appList">
        <li className={`item${location.pathname === '/' ? ' active' : ''}`}><Link to="/">Home</Link></li>
        <li className={`item${location.pathname === '/products' ? ' active' : ''}`}><Link to="/products">Products</Link></li>
        <li className="item"><Link to="/#uwb-technology">UWB Technology</Link></li>
        <li className={`item${location.pathname === '/contact' ? ' active' : ''}`}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;