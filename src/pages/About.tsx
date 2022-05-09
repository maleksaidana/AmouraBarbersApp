import React from 'react';
import { Link } from 'react-router-dom';

type MyProps = {
    // using `interface` is also ok
    message?: string;
  };
  type MyState = {
    count: number; // like this
  };
  class About extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };
    render() {
      return (
        <>  
        <h1>About</h1>        
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
          <hr />
        </div>   
      </>    
      );
    }
  }

  export default About;
