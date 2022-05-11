import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/products';
import PageCover from '../components/PageCover';
import ScrollerUp from '../components/ScrollerUp';


class ServicesPage extends React.Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "./assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }
    
    render() {
      return (
        <>  
        <Header currentPage='Services'/>
        <PageCover pageName='Services'/>
        <ScrollerUp/>
        <Products/>
        <Footer/>
        </>
      );
    }
  }

  export default ServicesPage;
