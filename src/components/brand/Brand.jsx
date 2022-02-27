import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';
import SectionTitle from '../sectionTitle/SectionTitle';
const Brand = () => (
  <>
  <SectionTitle title={"Our Partner"} />
  <div className="gpt3__brand section__padding" id='our-partner'>
    <div>
      <img src={google} alt="brand"/>
    </div>
    <div>
      <img src={slack} alt="brand"/>
    </div>
    <div>
      <img src={atlassian} alt="brand"/>
    </div>
    <div>
      <img src={dropbox} alt="brand"/>
    </div>
    <div>
      <img src={shopify} alt="brand"/>
    </div>
  </div>
  </>
);

export default Brand;
