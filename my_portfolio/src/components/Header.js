import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="header-section">
<div className="container-fluid">
    <div className="row">
        <div className="col-lg-12">
            <div className="logo">
            <Link className="active" to ="/">
              <img src="../assets/img/logo.png" alt="" /></Link>
                </div>
            <nav className="nav-menu mobile-menu">
                <ul>
               <li><Link className="active" to ="/">Home</Link></li>
               <li> <Link to ="/about">About</Link></li>
               <li><Link to ="/services">Services</Link></li>
               <li><Link to ="/portfolio/all">Portfolio</Link>
               <ul className="dropdown">
                            <li><Link to ="/portfolio/all">All</Link></li>
                            <li><Link to ="/portfolio/fashion">Fashion</Link></li>
                            <li><Link to ="/portfolio/prewedding">Pre Wedding</Link></li>
                            <li><Link to ="/portfolio/kids">Kids</Link></li>
                            <li><Link to ="/portfolio/wedding">Wedding</Link></li>
                            <li><Link to ="/portfolio/video">Video</Link></li>
                </ul>
               </li>
               <li><Link to ="/contact">Contact</Link></li>
               
                   {/* <li className="active"><a href="./index.html">Home</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./services.html">Services</a></li>
                    <li><a href="./pricing.html">Pricing</a></li>
                    <li><a href="./portfolio.html">Portfolio</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="#">Pages</a>
                        <ul className="dropdown">
                            <li><a href="./gallery.html">Gallery</a></li>
                            <li><a href="./portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="./blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="./contact.html">Contact</a></li>*/}
                </ul> 
            </nav>
           
            <div id="mobile-menu-wrap"></div>
        </div>
    </div>
</div>
</header>
    );
  }
}

export default Header;