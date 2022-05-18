import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import SliderArea from '../SliderArea/SliderArea';

type MyProps = {
    // using `interface` is also ok
    message?: string;
  };
  type MyState = {
    count: number; // like this
  };
  class AboutArea extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };
    render() {
      return (
            <section className="about-area section-padding30 position-relative">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-11">

                        <div className="about-img ">
                            <img src="assets/img/gallery/amoura1.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-caption">

                            <div className="section-tittle section-tittle3 mb-35">
                                <span>Amoura Barber's</span>
                                <h2>5 ans d'Experience dans la coiffure!</h2>
                            </div>
                            <p className="mb-30 pera-bottom">Conseille et aide au choix de coiffures, de coupes et coiffes en tenant compte de la mode, de la morphologie et du goût du client. Peut réaliser l'application de coloration temporaire ou durable.</p>
                            <p className="pera-top mb-50">C'est plus qu'un salon, c'est un lieu où l'on se sent privilégié, où l'on est écouté, où l'on prend le temps.</p>
                            <a href="https://www.instagram.com/moha._.barber/"><p className="mb-30 pera-bottom"><i className="fab fa-tiktok"></i></p></a>
                            <a href="https://www.instagram.com/moha._.barber/"><p className="mb-30 pera-bottom"><i className="fab fa-instagram"></i></p></a>
                            <a href="https://www.instagram.com/moha._.barber/"><p className="mb-30 pera-bottom"><i className="fab fa-facebook"></i></p></a>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-shape">
                <img src="assets/img/gallery/about-shape.png" alt=""/>
            </div>
        </section>
      );
    }
  }

  export default AboutArea;
