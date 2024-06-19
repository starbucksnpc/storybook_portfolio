import styled from 'styled-components';
import { MyLinkProps } from './MyLink.types';

const StyledLink = styled.a<{ color?: string; hoverColor?: string; backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#13b4f4"};  
  color: ${({ color }) => color || "white"};
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, transform 0.1s;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; 

  &:hover {
    background-color: ${({ disabled, hoverColor, backgroundColor }) => 
      disabled ? (backgroundColor || '#d3d3d3') : (hoverColor || '#0056b3')};
  }

  &:disabled {
    background-color: ${({ backgroundColor }) => backgroundColor || "#d3d3d3"};  
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }
`;

const MyLink: React.FC<MyLinkProps> = ({ label, disabled = false, style, backgroundColor, color, hoverColor }) => {
  return (
    <StyledLink
      href={disabled ? undefined : "#"}
      aria-disabled={disabled}
      style={style}
      backgroundColor={backgroundColor}
      color={color}
      hoverColor={hoverColor}
      disabled={disabled}
    >
      {label}
    </StyledLink>
  );
};

export default MyLink;