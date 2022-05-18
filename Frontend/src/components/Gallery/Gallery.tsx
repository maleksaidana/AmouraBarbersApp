import React from 'react';



class Gallery extends React.Component {




    render() {
      return (
        <div className="gallery-area section-padding30">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-9 col-sm-10">
                        <div className="section-tittle text-center mb-100">
                            <span>notre galerie d'images</span>
                            <h2>quelques images de notre salon de coiffure</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img " style={{backgroundImage: "url(assets/img/gallery/menu2.png)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img "  style={{backgroundImage: "url(assets/img/gallery/amoura2.jpg)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img "  style={{backgroundImage: "url(assets/img/gallery/gallery6.jpg)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img "  style={{backgroundImage: "url(assets/img/gallery/menu1.jpg)"}}></div>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Gallery;
