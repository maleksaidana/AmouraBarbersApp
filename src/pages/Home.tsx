import React from 'react';
import { Link } from 'react-router-dom';
import AboutArea from '../components/AboutArea';
import BestPricingArea from '../components/BestPricingArea';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Products from '../components/products';
import ScrollerUp from '../components/ScrollerUp';
import Services from '../components/Services';
import SliderArea from '../components/SliderArea';
import Team from '../components/Team';


class Home extends React.Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "./assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);

     
    }


    render() {
      return (
        <>  
          <Header/>
          <SliderArea/>
          <AboutArea/>
          <ScrollerUp/>
          <Services calledFromHome={true} />
          <Products calledFromHome={true} />
          <Team/>
          <BestPricingArea/>
          <Gallery/>
          <Footer/>
      </>
      );
    }
  }

  export default Home;
