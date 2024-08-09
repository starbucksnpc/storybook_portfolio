import React from 'react';
import styled from 'styled-components';
import { MyHeroProps } from './MyHero.types';
import MyButton from '../MyButton/MyButton'; // MyButton 컴포넌트 가져오기
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

@media (max-width: 768px) {
    height: 80vh; /* 화면이 작아질 때 높이 조정 */
  }

  @media (max-width: 480px) {
    height: 60vh; /* 화면이 더 작아질 때 높이 조정 */
  }
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

  @media (max-width: 768px) {
    padding-left: 5rem; /* 작은 화면에서 여백 조정 */
  }

  @media (max-width: 480px) {
    padding-left: 2rem; /* 더 작은 화면에서 여백 조정 */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem; /* 글씨 크기를 동일하게 설정 */
  margin-bottom: 5px; /* 줄 간격을 줄임 */

  @media (max-width: 768px) {
    font-size: 2rem; /* 작은 화면에서 글씨 크기 조정 */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* 더 작은 화면에서 글씨 크기 조정 */
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem; /* 글씨 크기를 동일하게 설정 */
  margin-bottom: 15px; /* 줄 간격을 줄임 */
  margin-top: 0px;

  @media (max-width: 768px) {
    font-size: 2rem; /* 작은 화면에서 글씨 크기 조정 */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* 더 작은 화면에서 글씨 크기 조정 */
  }
`;

const MyHero: React.FC<MyHeroProps> = ({ title, subtitle, buttonText, onButtonClick, disabled = false, disabledBackgroundColor, visible = true }) => {
  return (
    <HeroContainer disabled={disabled} disabledBackgroundColor={disabledBackgroundColor} visible={visible}>
      <Overlay />
      <ContentContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <MyButton 
          label={buttonText} 
          onClick={onButtonClick} 
          disabled={disabled} 
        />
      </ContentContainer>
    </HeroContainer>
  );
};

export default MyHero;