import React from 'react'
import '../../style/about.scss';
import AboutHeader from './AboutHeader'
import About from '../main/About'
import Services from '../main/Services'
import Clients from '../main/Clients'
import Workers from './Workers';

const AboutUs = () => {
  return (
    <>
      <AboutHeader />
      <About />
      <Services />
      <Clients />
      <Workers />
    </>
  )
}

export default AboutUs