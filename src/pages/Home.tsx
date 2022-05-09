import React from 'react';
import { Link } from 'react-router-dom';
import AboutArea from '../components/AboutArea';
import Header from '../components/Header';
import ScrollerUp from '../components/ScrollerUp';
import SliderArea from '../components/SliderArea';

type MyProps = {
    // using `interface` is also ok
    message?: string;
  };
  type MyState = {
    count: number; // like this
  };
  class Home extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "./assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);

     
    }


    render() {
      return (
        <>  
          <Header/>
          <SliderArea/>
          <AboutArea/>
          <ScrollerUp/>
      </>
      );
    }
  }

  export default Home;
