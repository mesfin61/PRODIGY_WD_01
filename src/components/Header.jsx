import React, {useState, useEffect} from 'react'
import '../styles/header.css';
import {Link} from 'react-scroll';

function Header() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        } 
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


  return (
    <>
        <div className={`header ${scrolling ? 'scrolling' : ''}`}>
                 <h1>LANDING PAGE</h1>
            <div className={`nav-links ${scrolling ? 'scrolling' : ''}`}>
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="services" smooth={true} duration={500}>Services</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </div>
        </div>
    </>
  )
}
export default Header;