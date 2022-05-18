import React from 'react';
import { Link } from 'react-router-dom';
import AboutArea from '../../components/AboutArea/AboutArea';
import BestPricingArea from '../../components/BestPricingArea/BestPricingArea';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import PageCover from '../../components/PageCover/PageCover';
import Preloader from '../../components/Preloader/Preloader';
import ScrollerUp from '../../components/ScrollerUp/ScrollerUp';


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
