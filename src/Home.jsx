import React from 'react';
import web from './images/DSC_0018.JPG';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return (
    < >
      <Common name='Grow your Business with' imgsrc={web} visit='/service' btname='Get Started'/>
    </>
  );

};

export default Home;
