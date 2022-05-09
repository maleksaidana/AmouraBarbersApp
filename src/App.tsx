import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes ,Route, Router, BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

type MyProps = {
  // using `interface` is also ok
};
type MyState = {
  count: number; // like this
};
class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <BrowserRouter>

      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
     </Routes> 
     </BrowserRouter>

    );
  }
}

export default App;
