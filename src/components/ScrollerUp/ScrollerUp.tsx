import React from 'react';

type MyProps = {
    // using `interface` is also ok
    message?: string;
  };
  type MyState = {
    count: number; // like this
  };
  class ScrollerUp extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };



    render() {
      return (
        <div id="back-top" >
             <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
         </div>
      );
    }
  }

  export default ScrollerUp;
