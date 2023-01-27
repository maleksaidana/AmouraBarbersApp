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
                                        <li>Coupe. . . . . . . . . . . . . . . . . . . . . . . . . . <span>20$</span></li>
                                        <li>Coupe et Barbe à partir de. . . . . . . . . . . . .  .  . . <span>25$</span></li>
                                        <li>Coupe pour enfants. . . . . . . . . . . . . . . .. . . .<span>15$ - 20$</span></li>
                                        <li>Cpupe avec ciseaux. . . . . . . . . . . . . . . . . . . . . .<span>22$</span></li>
                                        <li>Contour d'oreille. . . . . . . . . . . . . . . . . . . . . .<span>10$</span></li>
                                        <li>Contour d'oreille + Barbe. . . . . . . . . . . . . . .  . . <span>17$</span></li>
                                        <li>Broaching. . . . . . . . . . . . . . . . . . .<span>10$</span></li>
                                        <li>Kératine, protein, Botox à partir de (coupe inclus) . . . . . . . . . . . . . ..<span>100$</span></li>
                                        <li>Lisage à partir de. . . . . . . . . . . . . . . . . . .<span>60$</span></li>
                                        <li>Teinture coloration à partir de. . . . . . . . .  . . .<span>50$</span></li>
                                        <li>Lavage de tête. . . . . . . . . . . . . . . . . . .<span>3$</span></li>
                                        <li>Black mask. . . . . . . . . . . . . . . . . . .<span>5$</span></li>
                                        <li>Epilation cire. . . . . . . . . . . . . . . . . . .<span>5$</span></li>
                                        <li>Coupe VIP. . . . . . . . . . . . . . . . . . .<span>45$</span></li>
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
                <img style={{borderLeft: "30px solid #d19f68", borderTop: "30px solid #d19f68"}} width="25%" className="pricing-img2" src="assets/img/gallery/menu2.jpg" alt=""/>
            </div>
        </div>
        );
    }
  }

  export default BestPricingArea;
