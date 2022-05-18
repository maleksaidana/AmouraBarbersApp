import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/products';
import PageCover from '../../components/PageCover/PageCover';
import ScrollerUp from '../../components/ScrollerUp/ScrollerUp';
import Gallery from '../../components/Gallery/Gallery';
import Preloader from '../../components/Preloader/Preloader';


class Contact extends React.Component {

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
        <Header currentPage='Contact'/>
        <PageCover pageName='Contact'/>
        <ScrollerUp/>

        <section className="contact-section">
            <div className="container">
                <div className="d-none d-sm-block mb-5 pb-4">
                    <div style={{width: "100%"}}><iframe width="100%" height="600"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2134%20jean%20talon+(Amoura%20Barber's)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">gps smartwatches</a></iframe></div>                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Contactez-nous</h2>
                    </div>
                    <div className="col-lg-8">
                        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message"  placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="name" id="name" type="text"  placeholder="Entrez votre nom"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email"  placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="subject" type="text"  placeholder="Enter le sujet"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Envoyez</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>Montreal, Quebec.</h3>
                                <p>Jean Talon Ouest, CA 91770</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>+1 (438)-223-8805</h3>
                                <p>Du Lundi au Vendredi 9am a 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>sAmoura@gmail.com</h3>
                                <p>Contactez-nous a tous moment!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        </>
      );
    }
  }

  export default Contact;
