import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contactus from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/aboutus' element={<About/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
