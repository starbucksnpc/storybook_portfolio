import styled from 'styled-components';
import { MyButtonProps } from './MyButton.types';

const StyledButton = styled.button<{ disabled?: boolean, backgroundColor?: string }>`
  background-color: transparent;  
  color: #007bff;
  border: 2px solid #007bff;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background-color: ${props => (props.disabled ? 'transparent' : '#007bff')};
    color: ${props => (props.disabled ? '#007bff' : '#fff')};
  }

  &:active {
    transform: ${props => (props.disabled ? 'none' : 'scale(0.95)')};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const MyButton: React.FC<MyButtonProps> = ({ label = "Know More", onClick, disabled = false, style }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} style={style}>
      {label}
    </StyledButton>
  );
};

export default MyButton;
