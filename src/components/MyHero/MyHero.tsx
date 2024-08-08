import React from 'react';
import styled from 'styled-components';
import { MyHeroProps } from './MyHero.types';
import heroImage from '../../images/hero-image.jpg'; // 이미지 파일 경로

const HeroContainer = styled.div<{ disabled?: boolean; disabledBackgroundColor?: string; visible?: boolean }>`
  position: relative;
  width: 100%;
  height: 100vh; /* 화면 전체 높이로 설정 */
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: flex-start; /* 왼쪽 정렬로 변경 */
  align-items: center;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  ${({ disabled, disabledBackgroundColor }) =>
    disabled &&
    `
    background-color: ${disabledBackgroundColor || 'transparent'};
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 반투명한 어두운 오버레이 */
  z-index: 0;
`;

const ContentContainer = styled.div`
  text-align: left; /* 텍스트를 왼쪽 정렬로 변경 */
  color: white;
  z-index: 1;
  padding-left: 20rem; /* 왼쪽에 여백 추가 */
`;

const Title = styled.h1`
  font-size: 2.5rem; /* 글씨 크기를 동일하게 설정 */
  margin-bottom: 5px; /* 줄 간격을 줄임 */
`;

const Subtitle = styled.h2`
  font-size: 2.5rem; /* 글씨 크기를 동일하게 설정 */
  margin-bottom: 15px; /* 줄 간격을 줄임 */
  margin-top: 0px;
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

const MyHero: React.FC<MyHeroProps> = ({ title, subtitle, buttonText, onButtonClick, disabled = false, disabledBackgroundColor, visible = true }) => {
  return (
    <HeroContainer disabled={disabled} disabledBackgroundColor={disabledBackgroundColor} visible={visible}>
      <Overlay />
      <ContentContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button onClick={!disabled ? onButtonClick : undefined} disabled={disabled}>
          {buttonText}
        </Button>
      </ContentContainer>
    </HeroContainer>
  );
};

export default MyHero;
