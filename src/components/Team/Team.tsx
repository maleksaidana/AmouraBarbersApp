import React from 'react';



class Team extends React.Component {



    render() {
      return (
        <div className="team-area pb-180">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-11 col-sm-11">
                        <div className="section-tittle text-center mb-100">
                            <span>Équipe professionnelle</span>
                            <h2>Expert en coupe de cheveux primé pour vous</h2>
                        </div>
                    </div>
                </div>

                <div className="row team-active dot-style">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-">
                        <div className="single-team mb-80 text-center">
                            <div className="team-img">
                                <img src="assets/img/gallery/team1.png" alt=""/>
                            </div>
                            <div className="team-caption">
                                <span>Amoura Barber's</span>
                                <h3><a href="#">Mohamed Amoura</a></h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      );
    }
  }

  export default Team;
