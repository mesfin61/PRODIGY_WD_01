import React from 'react'
import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Featured from './components/featured';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Header/>
        <div id='banner'>
            <Banner/>
        </div>
        <div id='about'>
            <About/>
        </div>
        <div id='featured'>
            <Featured/>
        </div>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default App;