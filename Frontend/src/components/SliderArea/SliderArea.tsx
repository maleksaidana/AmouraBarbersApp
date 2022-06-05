import React from 'react';
import { Link } from 'react-router-dom';

type MyProps = {
    // using `interface` is also ok
    message?: string;
  };
  type MyState = {
    count: number; // like this
  };
  class SliderArea extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };
    
    render() {
      return (
        <div className="slider-area position-relative fix">
        <div className="slider-active">

            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                            <div className="hero__caption">
                                <span data-animation="fadeInUp" data-delay="0.2s">Avec Mohamed Amoura</span>
                                <h1 data-animation="fadeInUp" data-delay="0.5s">Meilleurs services et produits pour les cheveux</h1>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>

            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                            <div className="hero__caption">
                                <span data-animation="fadeInUp" data-delay="0.2s">Avec Mohamed Amoura</span>
                                <h1 data-animation="fadeInUp" data-delay="0.5s">Meilleurs services et produits pour les cheveux</h1>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>

        <div className="stock-text">
            <h2>Soyez plus confiant</h2>
            <h2>Soyez plus confiant</h2>
        </div>

         <div className="thumb-content-box">
            <div className="thumb-content">
                <h3>prendre rendez-vous maintenant</h3>
                <Link  to="/booking"><i className="fas fa-long-arrow-alt-right"></i></Link>
            </div>
        </div>
    </div>
      );
    }
  }

  export default SliderArea;
