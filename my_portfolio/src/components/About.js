import React, { Component } from 'react';
import about from '../img/about/about-pic.jpg';

class About extends Component {
  render() {
    return (
        <div>
           <div className="breadcrumb-option spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bo-links">
                        <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                        <span>About</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className="about-section ml20 mr20">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="about-pic set-bg" style={{backgroundImage: `url(${about})`}}>
                        <a href="https://www.youtube.com/watch?v=hxADTEJalRw&list=WL&index=49&t=0s" className="play-btn video-popup"><i className="fa fa-play"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="about-text">
                        <div className="section-title">
                            <h2>Capturing the moments that captivate your heart</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing, tempor incididunt ut labore et dolore
                                magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. All these
                                taglines are owned by their respective owners, and we do not have any copyright on them.
                            </p>
                        </div>
                        <div className="at-list">
                            <div className="al-item">
                                <div className="al-pic">
                                    <img src="../assets/img/about/list-1.png" alt=""/>
                                </div>
                                <div className="al-text">
                                    <h5>Professionalism</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida.</p>
                                </div>
                            </div>
                            <div className="al-item">
                                <div className="al-pic">
                                    <img src="../assets/img/about/list-2.png" alt=""/>
                                </div>
                                <div className="al-text">
                                    <h5>Individual approach</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida.</p>
                                </div>
                            </div>
                            <div className="al-item">
                                <div className="al-pic">
                                    <img src="../assets/img/about/list-3.png" alt=""/>
                                </div>
                                <div className="al-text">
                                    <h5>Flexible Schedule</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida.</p>
                                </div>
                            </div>
                            <div className="al-item">
                                <div className="al-pic">
                                    <img src="../assets/img/about/list-4.png" alt=""/>
                                </div>
                                <div className="al-text">
                                    <h5>Experience</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="team-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="section-title">
                        <h2>Our team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-btn">
                        <a href="#" className="primary-btn">Appointment</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item">
                        <img src="../img/team/team-1.jpg" alt=""/>
                        <div className="ti-text">
                            <h5>Alan walker</h5>
                            <span>Photographer</span>
                            <div className="ti-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item">
                        <img src="../img/team/team-2.jpg" alt=""/>
                        <div className="ti-text">
                            <h5>Ava Max</h5>
                            <span>Director</span>
                            <div className="ti-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item">
                        <img src="../img/team/team-3.jpg" alt=""/>
                        <div className="ti-text">
                            <h5>Anne-Marie</h5>
                            <span>Manager</span>
                            <div className="ti-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team-item">
                        <img src="../img/team/team-4.jpg" alt=""/>
                        <div className="ti-text">
                            <h5>Billie Eilish</h5>
                            <span>Assistant</span>
                            <div className="ti-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
  }
}

export default About;