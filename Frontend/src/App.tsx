import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes ,Route, Router, BrowserRouter, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import BookingPage from './pages/Booking/Booking';

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
           <Route path="/booking" element={<BookingPage/>} />
     </Routes> 
     </BrowserRouter>

    );
  }
}

export default App;
