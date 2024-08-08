import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Footer.css';
import MyButton from '../MyButton/MyButton'; // MyButton 컴포넌트 가져오기
import githubIcon from '../../images/github-icon.png'; // GitHub 아이콘 경로
import linkedinIcon from '../../images/linkedin-icon.png'; // LinkedIn 아이콘 경로

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <MyButton
        label="^"
        onClick={() => scroll.scrollToTop()}
      />
      <div className="Footer-links">
        <a href="https://github.com/starbucksnpc" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="Footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sol-nam-44106b289/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="Footer-icon" />
        </a>
      </div>
      <hr className="Footer-divider" />
      <p className="Footer-copyright">© 2024 Copyright Sol Nam</p>
    </div>
  );
};

export default Footer;
