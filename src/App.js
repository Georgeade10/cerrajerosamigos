import React from 'react';

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Laurels,
  SpecialMenu,
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Laurels />
    <Gallery />
    <AboutUs />
    <FindUs />
    <Footer />
  </div>
);

export default App;
