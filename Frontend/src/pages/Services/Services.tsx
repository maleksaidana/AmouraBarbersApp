import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PageCover from '../../components/PageCover/PageCover';
import ScrollerUp from '../../components/ScrollerUp/ScrollerUp';
import Preloader from '../../components/Preloader/Preloader';
import Services from '../../components/Services/Services';


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
        <Preloader/>
        <Header currentPage='Services'/>
        <PageCover pageName='Services'/>
        <ScrollerUp/>
        <Services/>
        <Footer/>
        </>
      );
    }
  }

  export default ServicesPage;
