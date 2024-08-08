import React from 'react';
import './AboutMe.css';
import profileImage from '../../images/profile.png'; // 이미지 경로를 맞춰주세요
import MyLink from '../MyLink/MyLink'; // MyLink 컴포넌트 가져오기

const AboutMe: React.FC = () => {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe-title">About Me</h1>
      <div className="AboutMe-content">
        <img src={profileImage} alt="Profile" className="AboutMe-image" />
        <div className="AboutMe-text">
          <p>
            Hi, I am a Fullstack Web Developer with a passion for creating dynamic and responsive web applications. 
            I have experience with various technologies including React, Node.js, Ruby on Rails, Python, and more. 
            I enjoy solving complex problems and continuously learning new skills to improve my craft.
          </p>
          <div className="AboutMe-link">
            <MyLink 
              label="Resume" 
              href="https://www.notion.so/Resume_SolNam-a275b17efc4344a69332a0006c3875d5" // 실제 링크를 넣어주세요
              backgroundColor="#13b4f4"
              color="white"
              hoverColor="#0056b3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
