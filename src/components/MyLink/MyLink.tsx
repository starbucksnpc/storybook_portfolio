import styled from 'styled-components';
import { MyLinkProps } from './MyLink.types';

const StyledLink = styled.a<{ color?: string; hoverColor?: string; backgroundColor?: string; disabled?: boolean }>`
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }
`;

const MyLink: React.FC<MyLinkProps> = ({ label, disabled = false, style, href }) => {
  return (
    <StyledLink
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      style={style}
      disabled={disabled}
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
}
