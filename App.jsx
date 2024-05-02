import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Header component */}
        <Header />
        <HomePage/>
        <AboutPage/> 
        <Routes>

        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} /> 
         <Route path="/destinations" component={Destinations} />
        <Route path="/booking" component={Booking} />
         <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />  
        </Routes>

        <Footer/>
        {/* You can include a footer component here */}
      </div>
    </Router>
  );
}
<>
</>


export default App;


