import React from 'react';
import { Nav } from './components/Nav';
import { Slider } from './body/Slider';
import { Features } from './body/Features';
import { Portfolio } from './body/Portfolio';
import { Pricing } from './body/Pricing';
import { About } from './body/About';
import { Testimonial } from './body/Testimonial';
import { Team } from './body/Team';
import { Contact } from './body/Contact';
import { Footer } from './components/Footer';

import './assets/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/lineicons.less';
import './assets/css/magnific-popup.css';
import './assets/css/slick.css';
import './assets/css/style.css';

export default () => {
  // id值对应, to跳转
  const nav = [
    'home',
    'services',
    'portfolio',
    'pricing',
    'about',
    'team',
    'contact',
  ];
  // sliter
  const sliter = [
    {
      titel: `Business is Now Digital`,
      text: `We blend insights and strategy to create digital products
  for forward-thinking organisations.`,
    },
    {
      titel: `Crafted for Business`,
      text: `We blend insights and strategy to create digital products
for forward-thinking organisations.`,
    },
    {
      titel: `Based on Bootstrap 4`,
      text: `We blend insights and strategy to create digital products
for forward-thinking organisations.`,
    },
  ];

  //features
  const featuresTitle = 'Graphics Design';
  const featuresText = 'Graphics Design';
  const featuresContent = [
    {
      icon: 'lni-layout',
      titel: 'Graphics Design',
      text: ' Short description for the ones who look for something new.',
    },
    {
      icon: 'lni-bolt',
      titel: 'Graphics Design',
      text: ' Short description for the ones who look for something new.',
    },
    {
      titel: 'Graphics Design',
      text: ' Short description for the ones who look for something new.',
      icon: 'lni-brush',
    },
  ];
  //portfolio
  const portfolioTitle = 'Featured Works';
  const portfolioText = `Stop wasting time and money designing and managing a website
  that doesn’t get results. Happiness guaranteed!`;
  const portfolioRows = [
    'branding-4 planning-4',
    'marketing-4 research-4',
    'branding-4 marketing-4',
    'planning-4 research-4',
    'marketing-4',
    'planning-4',
    'research-4',
    'branding-4 planning-4',
    'marketing-4',
  ];
  const portfolioControl = ['branding', 'marketing', 'planning', 'research'];
  return (
    <>
      <Nav nav={nav}></Nav>
      <Slider sliter={sliter}></Slider>
      <Features
        title={featuresTitle}
        text={featuresText}
        content={featuresContent}
      />
      <Portfolio
        titel={portfolioTitle}
        text={portfolioText}
        rows={portfolioRows}
        control={portfolioControl}
      />
      <Pricing />
      <About />
      <Testimonial />
      <Team />
      <Contact></Contact>
      <Footer />
    </>
  );
};
