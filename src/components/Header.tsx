import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
    currentPage: string;
  };

  class Header extends React.Component<HeaderProps> {

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
                                                <li className={this.props.currentPage == "Home" ? "active" : ""}><Link to='/'>Home</Link></li>
                                                <li className={this.props.currentPage == "About" ? "active" : ""}><Link to='/about'>A propos</Link></li>
                                                <li className={this.props.currentPage == "Services" ? "active" : ""}><Link to='/services'>Services</Link></li>
                                                <li className={this.props.currentPage == "Products" ? "active" : ""}><Link to='/products'>Produits</Link></li>
                                                <li className={this.props.currentPage == "Portfolio" ? "active" : ""}><Link to="/portfolio">Portfolio</Link></li>
                                                <li className={this.props.currentPage == "Contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                                                <li className={this.props.currentPage == "Academie" ? "active" : ""}><Link to="/contact">Académie</Link></li>
                                                <li className={this.props.currentPage == "Gift" ? "active" : ""}><Link  to="/contact">Carte Cadeau</Link></li>
    
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
