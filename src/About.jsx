import React from 'react';
import web from './images/kkk_pic.jpeg';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About= () => {
  return (
    < >
        <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact Now' />
     </>
  );

};

export default About;
