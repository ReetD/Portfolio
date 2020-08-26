import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/categories/cat-1.jpg';
class SectionThree extends Component {
  render() {
    return (
        <div>
          <section className="categories-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="section-title">
                        <h2>Categories</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor
                            incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-btn"><Link className="primary-btn" to ="/portfolio/all">VIew all</Link></div>
                </div>
            </div>
          {/*  <div className="categories-slider owl-carousel">
                <div className="cs-item">
                    <div className="cs-pic set-bg" style={{backgroundImage:  `url(${img1})`}}></div>
                    <div className="cs-text">
                        <h4>Animal</h4>
                        <span>120 pictures</span>
                    </div>
                </div>
                <div className="cs-item">
                    <div className="cs-pic set-bg" style={{backgroundImage:  `url(${img1})`}}></div>
                    <div className="cs-text">
                        <h4>Natural</h4>
                        <span>325 pictures</span>
                    </div>
                </div>
                <div className="cs-item">
                    <div className="cs-pic set-bg" style={{backgroundImage:  `url(${img1})`}}></div>
                    <div className="cs-text">
                        <h4>Potrait</h4>
                        <span>540 pictures</span>
                    </div>
                </div>
                <div className="cs-item">
                    <div className="cs-pic set-bg" style={{backgroundImage:  `url(${img1})`}}></div>
                    <div className="cs-text">
                        <h4>Animal</h4>
                        <span>120 pictures</span>
                    </div>
                </div>
                <div className="cs-item">
                    <div className="cs-pic set-bg" style={{backgroundImage:  `url(${img1})`}}></div>
                    <div className="cs-text">
                        <h4>Animal</h4>
                        <span>120 pictures</span>
                    </div>
                </div>
            </div>*/}
        </div>
    </section>
        </div>
    );
  }
}

export default SectionThree;
