import React from 'react';


class Preloader extends React.Component {



    render() {
      return (
            <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src="assets/img/logo/6.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Preloader;
