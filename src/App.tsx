import React from 'react';
import { Link, Element } from 'react-scroll';
import MyButton from './components/MyButton/MyButton';
import AboutMe from './components/AboutMe/AboutMe';
import './App.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, my name is Sol Nam</h1>
        <h1>I'm a Fullstack Web Developer.</h1>
        <Link to="about" smooth={true} duration={500}>
          <MyButton
            label="Know More"
            onClick={() => {}}
            backgroundColor="#13b4f4"
            disabled={false}
          />
        </Link>
      </header>
      <div style={{ height: '100vh' }}></div> {/* 빈 공간을 추가하여 스크롤을 유도 */}
      <Element name="about">
        <AboutMe />
      </Element>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Home />
  );
};

export default App;
