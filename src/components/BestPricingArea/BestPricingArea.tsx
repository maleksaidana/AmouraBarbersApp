import React from 'react';

class BestPricingArea extends React.Component {




    render() {
      return (
        <div className="best-pricing section-padding2 position-relative">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-tittle mb-50">
                            <span>NOS MEILLEURS PRIX</span>
                            <h2>NOUS OFFRONS LE MEILLEUR PRIX <br/> DANS LA VILLE!</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Cheveux. . . . . . . . . . . . . . . . . . . . . . . . . . <span>$15</span></li>
                                        <li>Cheveux + couleur. . . . . . . . . . . . . . . . . .  . . <span>$25</span></li>
                                        <li>Cheveux + Style. . . . . . . . . . . . . . . . . . . . . .<span>$20</span></li>
                                        <li>Ceratine. . . . . . . . . . . . . . . . . . . . . . . . . .<span>$60</span></li>
                                        <li>Coupe + Ceratine. . . . . . . . . . . . . . . . . . . . . .<span>$65</span></li>
                                        <li>Coupe + Ceratine + Barbe. . . . . . . . . . . . . . .  . . <span>$100</span></li>
                                        <li>Coupe + Couleur + Barbe. . . . . . . . . . . . . . . . . . .<span>$100</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="pricing-list">
                                    <ul>
                                        <li>Coupe Seulement. . . . . . . . . . . . . . . . . . . . . . . . . . .<span>$10</span></li>
                                        <li>Rasage. . . . . . . . . . . . . . . . . . . . . . . . . . <span>$15</span></li>
                                        <li>Barbe . . . . . . . . . . . . . . . . . . . . . .  <span>$10</span></li>
                                        <li>Coupe de cheveux + Barbe. . . . . . . . . . . . . . . . .  <span>$65</span></li>
                                        <li>Coupe + Rasage. . . . . . . . . . . . . . . . . . . . . . .<span>$30</span></li>
                                        <li>Netoyage. . . . . . . . . . . . . . . . . . . . . . . . .<span>$20</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pricing-img">
                <img className="pricing-img1" src="assets/img/gallery/menu1.jpg" alt=""/>
                <img style={{borderLeft: "30px solid #d19f68", borderTop: "30px solid #d19f68"}} width="25%" className="pricing-img2" src="assets/img/gallery/menu2.png" alt=""/>
            </div>
        </div>
        );
    }
  }

  export default BestPricingArea;
