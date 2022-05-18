import React from 'react';

type PreloaderState = {
  isLoaded: boolean; 
};

type PreloaderProps = {
};

class Preloader extends React.Component<PreloaderProps,PreloaderState>  {

  state: PreloaderState = {
    isLoaded: false,
  };

  componentDidMount(){
    setTimeout(()=>{this.setState({isLoaded: true});}, 450);
  }

    render() {
      return (
        <>
            {!this.state.isLoaded && <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src="assets/img/logo/6.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>}
        </>
      );
    }
  }

  export default Preloader;
