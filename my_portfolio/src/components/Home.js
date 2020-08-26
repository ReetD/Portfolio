import React, { Component } from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import OwlCarouselDemo from './OwlCarouselDemo';
import SectionFour from './SectionFour';

class Home extends Component {
  render() {
    return ( <React.Fragment>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <OwlCarouselDemo />
        <SectionFour />

        </React.Fragment>
    );
  }
}

export default Home;