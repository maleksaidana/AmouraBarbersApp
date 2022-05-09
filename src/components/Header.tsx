import React from 'react';
import { Link } from 'react-router-dom';

type MyProps = {
    // using `interface` is also ok
    message?: string;
  };
  type MyState = {
    count: number; // like this
  };
  class Header extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };
    render() {
      return (

        <header>

            <div className="header-area header-transparent pt-20">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <a href="index.html"><img width="40%" src="assets/img/logo/output-onlinepngtools.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="menu-main d-flex align-items-center justify-content-end">
   
                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li className="active"><a href="index.html">Home</a></li>
                                                <li><a href="about.html">A propos</a></li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="produits.html">Produits</a></li>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="contact.html">Académie</a></li>
                                                <li><a href="#">Carte Cadeau</a></li>
    
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                        <a href="from.html" className="btn header-btn">Rendez-vous</a>
                                    </div>
                                </div>
                            </div>   

                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
      );
    }
  }

  export default Header;
