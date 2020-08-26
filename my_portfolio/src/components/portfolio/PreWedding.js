import React, { Component } from 'react';
import img1 from '../../img/portfolio/pf-1.jpg';
import img2 from '../../img/portfolio/pf-2.jpg';
import img3 from '../../img/portfolio/pf-3.jpg';
import img4 from '../../img/portfolio/pf-4.jpg';
import img5 from '../../img/portfolio/pf-5.jpg';
import img6 from '../../img/portfolio/pf-6.jpg';
import img7 from '../../img/portfolio/pf-7.jpg';
import img8 from '../../img/portfolio/pf-8.jpg';
import img9 from '../../img/portfolio/pf-9.jpg';
import img10 from '../../img/portfolio/pf-10.jpg';
import img11 from '../../img/portfolio/pf-11.jpg';

class Prewedding extends Component {
  constructor() {
    super();
    this.state = {
        showMore: false
    };
}
handleClick =()=>{
    this.setState({showMore:!this.state.showMore})
}
  render() {
    return (
        <div>
         <section className="portfolio-section spad-1">
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="section-title">
                      <h2>Pre Wedding</h2>
                  </div>
                  </div>
                  </div></div>
                  </section>

      <div className="container-fluid" style={{marginLeft: "15px"}}>
          <div className="row">
              <div className="col-lg-12 p-0">
                  <div className="portfolio-filter">
                      <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img1})`}}>
                          <a href={img1} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg lifestyle" style={{backgroundImage: `url(${img2})`}}>
                          <a href={img2} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg natural" style={{backgroundImage: `url(${img3})`}}>
                          <a href={img3} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg wedding" style={{backgroundImage: `url(${img4})`}}>
                          <a href={img4} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg lifestyle" style={{backgroundImage: `url(${img7})`}}>
                          <a href={img7} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg natural" style={{backgroundImage: `url(${img8})`}}>
                          <a href={img8} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img5})`}}>
                          <a href={img5} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img6})`}}>
                          <a href={img6} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img10})`}}>
                          <a href={img10} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img11})`}}>
                          <a href={img11} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg wedding" style={{backgroundImage: `url(${img9})`}}>
                          <a href={img9} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img5})`}}>
                          <a href={img5} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img6})`}}>
                          <a href={img6} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img10})`}}>
                          <a href={img10} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>
                      <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img11})`}}>
                          <a href={img11} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div>


                      {this.state.showMore && ( <div>
                                                <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img5})`}}>
                                                <a href={img5} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img6})`}}>
                                                <a href={img6} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img10})`}}>
                                                <a href={img10} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img11})`}}>
                                                <a href={img11} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg wedding" style={{backgroundImage: `url(${img9})`}}>
                                                <a href={img9} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img5})`}}>
                                                <a href={img5} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img6})`}}>
                                                <a href={img6} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg videos" style={{backgroundImage: `url(${img10})`}}>
                                                <a href={img10} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                                            <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img11})`}}>
                                                <a href={img11} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                                                <div className="pf-text">
                                                    <h4>COLORS SPEAK</h4>
                                                    <span>Fashion</span>
                                                </div>
                                            </div>
                      </div>)}


                  </div>
              </div>
          </div>
      </div>
      <div className="load-more-btn">
      <button onClick = {this.handleClick}>Load More</button>
      </div>
        </div>
    );
  }
}

export default Prewedding;