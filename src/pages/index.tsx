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
  const featuresTitel = 'Graphics Design';
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
  const portfolioTitel = 'Featured Works';
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
  // pricing
  const pricingTitel = 'Featured Works';
  const pricingText = `Stop wasting time and money designing and managing a website
  that doesn’t get results. Happiness guaranteed!`;
  const pricingContent = [
    {
      name: 'Basic',
      money: 200,
    },
    {
      name: 'Enterprise',
      money: 400,
    },

    {
      name: 'Basic',
      money: 600,
    },
  ];
  // about
  const aboutTitel = 'A Little More About Us';
  const aboutText = ` Frequently Asked Questions About Our Site`;
  const aboutContent = [
    {
      question: 'Frequently Asked Question One',
      text: ` Morbi vehicula arcu et pellentesque tincidunt. Nunc
      ligula nulla, lobortis a elementum non,`,
    },
    {
      question: 'Frequently Asked Question One',
      text: ` Morbi vehicula arcu et pellentesque tincidunt. Nunc
      ligula nulla, lobortis a elementum non,`,
    },
  ];
  // testimonial
  const testiomonialTitel = 'Testimonials';
  const testiomonialText = `What Clients Says   About Us`;
  const testiomonialDescribe = `Duis et metus et massa tempus lacinia. className aptent taciti
sociosqu ad litora torquent per conubia nostra, per inceptos
himenaeos. Maecenas ultricies, orci molestie blandit interdum.

 ipsum ante pellentesque nisl, eget mollis
turpis quam nec eros. ultricies, orci molestie blandit interdum.`;
  const testiomonialContent = [
    {
      text: ` “Praesent scelerisque, odio eu fermentum malesuada, nisi
  arcu volutpat nisl, sit amet convallis nunc turp.”`,
      name: 'Mr. Jems Bond',
      titel: 'CEO Mbuild Firm',
    },
    {
      text: ` “Praesent scelerisque, odio eu fermentum malesuada, nisi
  arcu volutpat nisl, sit amet convallis nunc turp.”`,
      name: 'Mr. Jems Bond',
      titel: 'CEO Mbuild Firm',
    },
    {
      text: ` “Praesent scelerisque, odio eu fermentum malesuada, nisi
  arcu volutpat nisl, sit amet convallis nunc turp.”`,
      name: 'Mr. Jems Bond',
      titel: 'CEO Mbuild Firm',
    },
  ];
  // team
  const teamTitel = 'Meet The Team';
  const teamText = ` Stop wasting time and money designing and managing a website
that doesn’t get results. Happiness guaranteed!`;
  const teamContent = [
    {
      name: 'Jeffery Riley',
      titel: 'Art Director',
    },
    {
      name: 'Riley Beata',
      titel: 'Web Developer',
    },
    {
      name: 'Mark A. Parker',
      titel: 'UX Designer',
    },
  ];
  // contact
  const contactTitel = 'Contact';
  const contactText = ` Stop wasting time and money designing and managing a website
that doesn’t get results. Happiness guaranteed!`;
  const address = 'Elizabeth St, Melbourne 1202 Australia.';
  const email = 'support@uideck.com';
  const phone = '+333 985-458-609';
  return (
    <>
      <Nav nav={nav}></Nav>
      <Slider sliter={sliter}></Slider>
      <Features
        title={featuresTitel}
        text={featuresText}
        content={featuresContent}
      />
      <Portfolio
        titel={portfolioTitel}
        text={portfolioText}
        rows={portfolioRows}
        control={portfolioControl}
      />
      <Pricing
        titel={pricingTitel}
        text={pricingText}
        content={pricingContent}
      />
      <About titel={aboutTitel} text={aboutText} content={aboutContent} />
      <Testimonial
        titel={testiomonialTitel}
        text={testiomonialText}
        describe={testiomonialDescribe}
        content={testiomonialContent}
      />

      <Team titel={teamTitel} text={teamText} content={teamContent} />
      <Contact
        titel={contactTitel}
        text={contactText}
        address={address}
        email={email}
        phone={phone}
      />
      <Footer email={email} phone={phone} />
    </>
  );
};
