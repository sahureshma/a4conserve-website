import { useState } from "react";
import './Header.css'
import { IoMdCall } from "react-icons/io";

import { Link } from 'react-router-dom';
const Header = () => {
    const [show, setShow]=useState(false);
   
    return (
     <header className="header" id="home">
    <nav class="nav container">
      <a href="#home" className="nav-logo"><span><img src='https://a4conserv.com/wp-content/uploads/2021/10/a4-conserv-logo.png' /></span></a>
      


      <div className={`nav-menu ${show ? 'show-menu' : ''}`} id="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link"  onClick={()=> setShow(!show)}>
                Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={()=> setShow(!show)}>
                About</a>
          </li>
          <li className="nav-item">
            <a href="#program" className="nav-link"  onClick={()=> setShow(!show)}>
                Services</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link"  onClick={()=> setShow(!show)}>
                Products</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link"  onClick={()=> setShow(!show)}>
                Blogs</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link"  onClick={()=> setShow(!show)}>
                Contact</a>
          </li>
          <div className="nav-close" id="nav-close" onClick={()=> setShow(!show)}>
            <i className="ri-close-line nav-close"></i>
          </div>
        </ul>

        <Link to="/signin" className="nav-button">
            <IoMdCall />+919642437773
    </Link>
    
      </div>

      <div class="nav-toggle" onClick={()=> setShow(!show)}>
        <i class="ri-menu-4-line"></i>
      </div>
    
    </nav>
  </header>
    );
};
export default Header;