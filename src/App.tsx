import React from 'react';
import { Element, scroller } from 'react-scroll';
import MyHero from './components/MyHero/MyHero';
import AboutMe from './components/AboutMe/AboutMe';
import MyProject from './components/MyProject/MyProject'; 
import Contact from './components/Contact/Contact'; 
import Footer from './components/Footer/Footer'; 


import './App.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <MyHero
        title="Hi, my name is Sol Nam"
        subtitle="I’m a Full Stack Web Developer"
        buttonText="Know More"
        onButtonClick={() => {
          scroller.scrollTo('about', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        }}
      />
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <MyProject />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Home />
  );
};

export default App;
