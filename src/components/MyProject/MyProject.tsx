import React from 'react';
import './MyProject.css';
import projectImage from '../../images/project-image.png'; // 프로젝트 이미지 경로를 맞춰주세요
import MyLink from '../MyLink/MyLink'; // MyLink 컴포넌트 가져오기

const MyProject: React.FC = () => {
  return (
    <div className="MyProject">
      <h1 className="MyProject-title">Projects</h1>
      <div className="MyProject-content">
        <div className="MyProject-text">
          <h2>Ecommerce Project</h2>
          <p>
          The goal of this project was to create and deploy an e-commerce website for a fictional client using the skills learned during the semester. I developed a jewelry web store using Ruby on Rails, featuring user authentication, product listings, and a smooth shopping experience.
          </p>
          <div className="MyProject-link">
            <MyLink 
              label="Visit Website" 
              href="https://github.com/starbucksnpc/ecommerce_project" // 실제 링크를 넣어주세요
              backgroundColor="#13b4f4"
              color="white"
              hoverColor="#0056b3"
            />
          </div>
        </div>
        <img src={projectImage} alt="Project" className="MyProject-image" />
      </div>
    </div>
  );
};

export default MyProject;
