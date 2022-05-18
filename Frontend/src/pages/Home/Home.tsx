import React from 'react';
import { Link } from 'react-router-dom';
import AboutArea from '../../components/AboutArea/AboutArea';
import BestPricingArea from '../../components/BestPricingArea/BestPricingArea';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import Preloader from '../../components/Preloader/Preloader';
import Products from '../../components/Products/products';
import ScrollerUp from '../../components/ScrollerUp/ScrollerUp';
import Services from '../../components/Services/Services';
import SliderArea from '../../components/SliderArea/SliderArea';
import Team from '../../components/Team/Team';

type HomeState = {
  isLoaded: boolean; 
};

type HomeProps = {
};

class Home extends React.Component<HomeProps,HomeState> {


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
          <Header currentPage='Home'/>
          <SliderArea/>
          <AboutArea/>
          <ScrollerUp/>
          <Services calledFromHome />
          <Products calledFromHome />
          <Team/>
          <BestPricingArea/>
          <Gallery/>
          <Footer/>
      </>
      );
    }
  }

  export default Home;
