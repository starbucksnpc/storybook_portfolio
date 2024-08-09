import styled from 'styled-components';
import { MyTextProps } from './MyText.types';

const StyledText = styled.div<MyTextProps>`
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '14px';
      case 'large':
        return '24px';
      default:
        return '18px';
    }
  }};
  font-weight: ${(props) => (props.fontWeight === 'bold' ? 'bold' : 'normal')};
  color: ${(props) => (props.disabled ? '#aaa' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'inherit')};
`;

const MyText: React.FC<MyTextProps> = ({ text, size = 'medium', fontWeight = 'normal', disabled = false }) => {
  return <StyledText size={size} fontWeight={fontWeight} disabled={disabled}>{text}</StyledText>;
};

export default MyText;
