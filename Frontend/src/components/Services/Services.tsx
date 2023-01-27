import React from 'react';


    type ServicesProps = {
        calledFromHome?: boolean;
    };

  class Services extends React.Component<ServicesProps>  {
    render() {
      return (
        <section className={this.props.calledFromHome ? "service-area pb-170" : "service-area section-padding30"}>
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                        <div className="section-tittle text-center mb-90">
                            <span>Services professionnels</span>
                            <h2>NOS MEILLEURS SERVICES QUE NOUS VOUS PROPOSONS</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <img style={{borderRadius: "50%"}}  width="60%" src="assets/img/gallery/services1.jpg" alt="" />
                            </div> 
                            <div className="service-cap">
                                <br/>
                                <h4><a href="#">Coupe de cheveux</a></h4>
                                <p>Des coupes de cheveux tendance chez notre coiffeur expérimenté.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption active text-center mb-30">
                            <div className="service-icon">
                                <img style={{borderRadius: "50%"}} width="60%" src="assets/img/gallery/services2.jpg" alt=""/>
                            </div> 
                            <div className="service-cap">
                                <br/>
                                <h4><a href="#">Barbe et rasage</a></h4>
                                <p>Barbe parfaite et rasage professionnel chez notre coiffeur.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon">
                                <img style={{borderRadius: "50%"}}  width="60%" src="assets/img/gallery/services3.jpg" alt=""/>
                            </div> 
                            <div className="service-cap">
                                <br/>
                                <h4><a href="#">Coloration de cheveux</a></h4>
                                <p>Coloration de cheveux sur mesure chez notre coiffeur expérimenté.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }

  export default Services;
