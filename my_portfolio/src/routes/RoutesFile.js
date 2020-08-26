import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import All from '../components/portfolio/All';
import Fashion from '../components/portfolio/Fashion';
import PreWedding from '../components/portfolio/PreWedding';
import Kids from '../components/portfolio/Kids';
import Wedding from '../components/portfolio/Wedding';
import Video from '../components/portfolio/Video';
import Contact from '../components/Contact';


const RoutesFile = () => (
<Switch>
    <Route exact path = "/" component = {Home} />
    <Route path = "/about" component = {About} />
    <Route path = "/services" component = {Services} />
    <Route path="/portfolio/:topic" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
   {/* <Route path = "/all" component = {All} />
    <Route path = "/fashion" component = {Fashion} />
    <Route path = "/prewedding" component = {PreWedding} />
    <Route path = "/kids" component = {Kids} />
    <Route path = "/wedding" component = {Wedding} />
    <Route path = "/video" component = {Video} />
    <Route path = "/aboutme" component = {Aboutme} />
    
    <Route path = "/contact" component = {Contact} />
    <Route path = "/projects" component = {Projects} /> */}
    
</Switch>
)

export default RoutesFile;