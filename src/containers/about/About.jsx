import React from 'react';
import aboutImage from '../../assets/about.png';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './about.css';

const About = () => (
    <>
    <SectionTitle title={"Who We Are"}/>
  <div className="gpt3__about section__padding" id="about-us">
    <div className="gpt3__about-image">
      <img src={aboutImage} alt="possibility" className='animated-img' />
    </div>
    <div className="gpt3__about-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  </>
);

export default About;
