import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PageCover from '../../components/PageCover/PageCover';
import ScrollerUp from '../../components/ScrollerUp/ScrollerUp';
import Preloader from '../../components/Preloader/Preloader';
import Booking from '../../components/Booking/Booking';


class BookingPage extends React.Component {

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
        <Header currentPage='Booking'/>
        <PageCover pageName='Rendez-Vous'/>
        <Booking/>
        <ScrollerUp/>
        <Footer/>
        </>
      );
    }
  }

  export default BookingPage;
