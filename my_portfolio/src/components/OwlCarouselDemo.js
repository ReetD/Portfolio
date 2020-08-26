import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  

export class OwlCarouselDemo extends Component {  
        render(){  
          return (  
            <div>  
                 <section className="categories-section">
                    <div className="container">
                        <div className="row">
                            
                            <OwlCarousel items={3}  className="owl-theme" loop nav  margin={8} autoplay ={true}>  
                                <div >
                                    <img  className="img" src= {'assets/img/categories/cat-1.jpg'}/>
                                    <div className="text">
                                        <h4>Wedding</h4>
                                        <span>120 pictures</span>
                                    </div>
                                </div>  
                                <div>
                                    <img  className="img" src= {'assets/img/categories/cat-2.jpg'}/>
                                    <div className="text">
                                        <h4>Birthday</h4>
                                        <span>120 pictures</span>
                                    </div>
                                </div>  
                                <div>
                                    <img  className="img" src= {'assets/img/categories/cat-3.jpg'}/>
                                    <div className="text">
                                        <h4>Kids</h4>
                                        <span>120 pictures</span>
                                    </div>
                                </div>  
                                <div>
                                    <img  className="img" src= {'assets/img/categories/cat-4.jpg'}/>
                                    <div className="text">
                                        <h4>Pre-Wedding</h4>
                                        <span>120 pictures</span>
                                    </div>
                                </div>  
                                <div>
                                    <img className="img" src= {'assets/img/categories/cat-5.jpg'}/>
                                    <div className="text">
                                        <h4>Fashion</h4>
                                        <span>120 pictures</span>
                                    </div>
                                </div>  
                                </OwlCarousel>  
                           
                        </div>
                 </div>
                 </section>
          
          </div>  
          )  
        }  
      }  

    


export default OwlCarouselDemo;