import React from 'react';
import ai from '../../assets/hero-ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Advancing AI In Pakistan</h1>
      <p>We Are Leading The AI Revolution In Pakistan, Educating The The Next Generation Of Pakistani AI Researchers And Innovators</p>

      <div className="gpt3__header-content__input">
        <button type="button">Join Us</button>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="logo"/>
    </div>
  </div>
);

export default Header;
