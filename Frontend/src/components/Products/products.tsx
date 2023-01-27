import React from 'react';


    type ProductsProps = {
        calledFromHome?: boolean;
    };

  class Products extends React.Component<ProductsProps>  {
    render() {
      return (
        <section className={this.props.calledFromHome ? "service-area pb-170" : "service-area section-padding30"}>
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                        <div className="section-tittle text-center mb-90">
                            <span>Produits de qualité</span>
                            <h2>NOS MEILLEURS PRODUITS QUE NOUS VOUS PROPOSONS</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <img style={{borderRadius: "50%"}} width="60%" src="assets/img/gallery/produits1.jpg" alt=""/>
                            </div> 
                            <div className="service-cap">
                                <br/>
                                <h4><a href="#">Produits cheveux</a></h4>
                                <p>Produits professionnels pour cheveux de qualité chez notre coiffeur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption active text-center mb-30">
                            <div className="service-icon">
                                <img style={{borderRadius: "50%"}}  width="60%" src="assets/img/gallery/produits2.jpg" alt=""/>
                            </div> 
                            <div className="service-cap">
                                <br/>
                                <h4><a href="#">Kératine</a></h4>
                                <p>Traitement de la kératine pour des cheveux plus forts et plus beaux chez notre coiffeur.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <img style={{borderRadius: "50%"}}  width="60%" src="assets/img/gallery/produits3.jpg" alt=""/>
                            </div> 
                            <div className="service-cap">
                                <br/>
                                <h4><a href="#">Produit Visages</a></h4>
                                <p>"Meilleurs Soins professionnels pour le visage chez le meilleur coiffeur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }

  export default Products;
