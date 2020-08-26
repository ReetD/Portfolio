import React, { Component } from 'react';
import img1 from '../img/hero/hero-1.jpg';
import img2 from '../img/hero/hero-2.jpg';
import img3 from '../img/hero/hero-3.jpg';
import img4 from '../img/hero/hero-4.jpg';
import img5 from '../img/hero/hero-5.jpg';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';

class SectionOne extends Component {
    constructor() {
        super();
        this.state = {
          Images: [img1,img2,img3,img4,img5],
          
      }
    }
  render() {
    return (
            <div className="hero-section">
            <div className="hs-slider">
            <OwlCarousel items={1}  className="owl-theme" loop nav  margin={8} autoplay ={true}>  
             {this.state.Images.map((img, index) => (
                <div className="hs-item set-bg" style={{backgroundImage: `url(${img})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb150">
                                    <h1 className="home_text">Sonu Photography</h1>
                                    <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et<br /> dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida accumsan lacus vel facilisis.
                                    </p>
                                    <Link className="primary-btn" to ="/contact">Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                ))}
            </OwlCarousel>  
            </div>
            </div>
        );
    }
}

export default SectionOne;