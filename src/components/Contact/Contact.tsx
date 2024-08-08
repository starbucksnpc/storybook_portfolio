import React from 'react';
import './Contact.css';
import MyLink from '../MyLink/MyLink'; // MyLink 컴포넌트 가져오기

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <h1 className="Contact-title">Contact</h1>
      <p className="Contact-text">Would you like to work with me?</p>
      <div className="Contact-link">
        <MyLink 
          label="Let's Talk" 
          href="https://www.linkedin.com/in/sol-nam-44106b289/" // 실제 이메일 링크를 넣어주세요
        />
      </div>
    </div>
  );
};

export default Contact;

