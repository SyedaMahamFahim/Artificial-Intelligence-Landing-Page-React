import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header,About,Contact } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';
// import About from './containers/about/About';

const App = () => (
  <div className="App">
   
      <Navbar />
      <Header />
   
    <About/>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Contact/>
    <Footer />
  </div>
);

export default App;
