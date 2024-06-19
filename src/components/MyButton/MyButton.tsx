import styled from 'styled-components';
import { MyButtonProps } from './MyButton.types';

const StyledButton = styled.button<{ disabled?: boolean, backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#13b4f4"};  
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, transform 0.1s;;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;

  &:hover {
    background-color: ${props => (props.disabled ? (props.backgroundColor || '#d3d3d3') : '#0056b3')};
  }

  &:active {
    transform: ${props => (props.disabled ? 'none' : 'scale(0.95)')};
  }

  &:disabled {
    background-color: ${({ backgroundColor }) => backgroundColor || "#d3d3d3"};  
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const MyButton: React.FC<MyButtonProps> = ({ label ="Know More", onClick, disabled = false, style, backgroundColor }) => {
  return (
    <StyledButton onClick={onClick} backgroundColor={backgroundColor} disabled={disabled} style={style}>
      {label}
    </StyledButton>
  );
};

export default MyButton;