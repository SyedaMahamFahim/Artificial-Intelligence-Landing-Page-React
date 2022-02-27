import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter } from 'react-icons/ai'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1 className='logo_text'>AIC</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about-us">About us</a></p>
          <p><a href="#our-partner">Our Partner</a></p>
          <p><a href="#our-project">Our Project</a></p>
          <p><a href="#our-goals">Our Goals</a></p>
          <p><a href="#our-promise">Our Promise</a></p>
          <p><a href="#lastest-news">Lastest News</a></p>
          <p><a href="#contact">Contact Us</a></p>
          
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="www.faceboo.com" className='nav_icon'>
            <AiFillFacebook />
        </a>
        <a href="www.faceboo.com" className='nav_icon'>
            <AiOutlineInstagram />
        </a>
        <a href="www.faceboo.com" className='nav_icon'>
            <AiOutlineTwitter />
        </a>
        
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
