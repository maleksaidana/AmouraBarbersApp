import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/products';
import PageCover from '../components/PageCover';
import ScrollerUp from '../components/ScrollerUp';
import Gallery from '../components/Gallery';
import Preloader from '../components/Preloader';


class Portfolio extends React.Component {

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
        <Header currentPage='Portfolio'/>
        <PageCover pageName='Portfolio'/>
        <ScrollerUp/>
        <Gallery/>
        <Footer/>
        </>
      );
    }
  }

  export default Portfolio;
