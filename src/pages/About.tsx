import React from 'react';
import { Link } from 'react-router-dom';
import AboutArea from '../components/AboutArea';
import BestPricingArea from '../components/BestPricingArea';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import PageCover from '../components/PageCover';
import Preloader from '../components/Preloader';
import ScrollerUp from '../components/ScrollerUp';


  class About extends React.Component {

    componentDidMount () {
      const script = document.createElement("script");
      script.src = "./assets/js/main.js";
      script.async = true;
      document.body.appendChild(script);
    }

    render() {
      return (
        <>  
          <Preloader/>
          <Header currentPage='About'/>
          <PageCover pageName='A propos'/>
          <AboutArea/>
          <BestPricingArea/>
          <Gallery/>
          <Footer/>
          <ScrollerUp/>
      </>    
      );
    }
  }

  export default About;
