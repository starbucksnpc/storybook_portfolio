import styled from 'styled-components';
import { MyLinkProps } from './MyLink.types';

const StyledLink = styled.a<{ hoverColor?: string; disabled?: boolean }>`
  background-color: transparent;  
  color: #007bff;
  border: 2px solid #007bff;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'transparent' : '#007bff')};
    color: ${({ disabled }) => (disabled ? '#007bff' : '#fff')}; 
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: auto;  // 클릭은 막지만 커서를 금지 마크로 유지
  }
`;

const MyLink: React.FC<MyLinkProps> = ({ label, disabled = false, style, href, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault(); // 링크가 비활성화된 경우 기본 동작 방지
    } else if (onClick) {
      e.preventDefault(); // 기본 동작 방지
      onClick(e);
    }
  };

  return (
    <StyledLink
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      style={style}
      onClick={handleClick}
    >
      {label}
    </StyledLink>
  );
};

export default MyLink;

export interface MyLinkProps {
  label: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
