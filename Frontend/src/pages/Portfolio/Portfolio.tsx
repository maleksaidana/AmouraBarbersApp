import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/products';
import PageCover from '../../components/PageCover/PageCover';
import ScrollerUp from '../../components/ScrollerUp/ScrollerUp';
import Gallery from '../../components/Gallery/Gallery';
import Preloader from '../../components/Preloader/Preloader';


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
