import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './possibility.css';

const Possibility = () => (
  <>
  <SectionTitle title={"Our Promise"}/>
  <div className="gpt3__possibility section__padding" id="our-promise">
    
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
    <div className="gpt3__possibility-image">
      {/* <img src={possibilityImage} alt="possibility" /> */}
    </div>
  </div>
  </>
);

export default Possibility;
