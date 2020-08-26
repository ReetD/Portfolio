import React, { Component } from 'react';
import img1 from '../img/services/service-1.jpg';
import img2 from '../img/services/service-2.jpg';
import img3 from '../img/services/service-3.jpg';

class Services extends Component {
  render() {
    return (
                 <div>
                     <div className="breadcrumb-option spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bo-links">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <span>Services</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className="services-section services-normal spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="services-item">
                        <img src={img1} alt=""/>
                        <h3>Shooting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="services-item">
                        <img src={img2} alt=""/>
                        <h3>Videos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="services-item">
                        <img src={img3} alt=""/>
                        <h3>Editing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="services-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">01</div>
                            <h5>Filming and Editing</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">02</div>
                            <h5>Engagement photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">03</div>
                            <h5>Comercial photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">04</div>
                            <h5>Social media photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">02</div>
                            <h5>Event Photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">03</div>
                            <h5>personal photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
                 </div>
        
    );
  }
}

export default Services;