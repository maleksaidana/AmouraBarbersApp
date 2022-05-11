import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes ,Route, Router, BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

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
           <Route path="/products" element={<Products />} />
           <Route path="/services" element={<Services />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/contact" element={<Contact />} />
     </Routes> 
     </BrowserRouter>

    );
  }
}

export default App;
