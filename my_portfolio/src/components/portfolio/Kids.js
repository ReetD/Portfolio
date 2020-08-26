import React, { Component } from 'react';
import axios from 'axios';
import { ImageGroup, Image } from 'react-fullscreen-image'


class Kids extends Component {
  constructor() {
    super();
    this.state = {
      kidsImages: [],
      isLoading: false
  }
}
componentDidMount() {
  this.setState({ isLoading: true });
  axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then(result => 
     {console.log(result.data)
      this.setState({
        kidsImages: result.data,
          isLoading: false
      })}
      
  )
  .catch(error => 
      this.setState({
          error,
          isLoading: false
      })
  );
}

handleClick =()=>{
  //console.log(this.state.kidsImages[0]);
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
                      <h2>Kids</h2>
                  </div>
                  </div>
                  </div></div>
                  </section>

      <div className="container-fluid" style={{marginLeft: "15px"}}>
          <div className="row">
              <div className="col-lg-12 p-0">
                  <div className="portfolio-filter">
                  <ImageGroup>
                  
                    
                  {this.state.kidsImages.map((img, index) => (
                          
                      <div className="pf-item set-bg fashion">
                        <Image src={img.url} alt="nature" style={{ position: 'absolute',top: 0,left: 0,right: 0,
                         bottom: 0, height: '100%', width: '100%', objectFit: 'cover'}}/>
                      </div>
                    ))}
                  
                   {/**  <div className="pf-item set-bg fashion" style={{backgroundImage: `url(${img.url})`}}>
                          <a href={img.url} className="pf-icon image-popup"><span className="icon_plus"></span></a>
                          <div className="pf-text">
                              <h4>COLORS SPEAK</h4>
                              <span>Fashion</span>
                          </div>
                      </div> */} 
                    
                </ImageGroup>
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

export default Kids;