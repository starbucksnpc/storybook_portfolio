import React from 'react';
import styled from 'styled-components';
import { MyHeroProps } from './MyHero.types';

const HeroContainer = styled.div<{ disabled?: boolean; disabledBackgroundColor?: string; visible?: boolean }>`
  position: relative;
  width: 100%;
  height: 300px; 
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  /* opacity: ${({ disabled }) => (disabled ? 0.6 : 1)}; */
  ${({ disabled, disabledBackgroundColor }) =>
    disabled &&
    `
    background-color: ${disabledBackgroundColor || 'transparent'};
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ContentContainer = styled.div`
  text-align: center;
  color: white;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#007bff' : '#0056b3')};
  }
`;

const MyHero: React.FC<MyHeroProps> = ({ backgroundImage, title, buttonText, onButtonClick, disabled = false, disabledBackgroundColor, visible = true }) => {
  return (
    <HeroContainer disabled={disabled} disabledBackgroundColor={disabledBackgroundColor} visible={visible}>
      {backgroundImage && <StyledImage src={backgroundImage} alt="Hero background" />}
      <ContentContainer>
        <Title>{title}</Title>
        <Button onClick={!disabled ? onButtonClick : undefined} disabled={disabled}>
          {buttonText}
        </Button>
      </ContentContainer>
    </HeroContainer>
  );
};

export default MyHero;
