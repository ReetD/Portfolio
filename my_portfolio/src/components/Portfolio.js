import React, { Component } from 'react';
import SectionFour from './SectionFour';
import { Link } from 'react-router-dom';
import Fashion from './portfolio/Fashion';
import Kids from './portfolio/Kids';
import { BrowserRouterProps } from 'react-router-dom';
import Prewedding from './portfolio/PreWedding';
import Wedding from './portfolio/Wedding';
import Video from './portfolio/Video';
//import SectionFour from './SectionFour';




class Portfolio extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
        showMore: false
    };*/
}

  render() {
    return (
        <div>
             <div className="breadcrumb-option">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="bo-links">
                      <Link className="active" to ="/"><i className="fa fa-home"></i>Home</Link>
                          {/*<a href="./index.html"><i className="fa fa-home"></i> Home</a>*/}
                          <span>Portfolio</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   {this.props.match.params.topic === 'all' && <SectionFour />}
   {this.props.match.params.topic === 'fashion' && <Fashion />}
   {this.props.match.params.topic === 'kids' && <Kids />}
   {this.props.match.params.topic === 'prewedding' && <Prewedding />}
   {this.props.match.params.topic === 'wedding' && <Wedding />}
   {this.props.match.params.topic === 'video' && <Video />}
   
    </div>
    );
  }
}

export default Portfolio;