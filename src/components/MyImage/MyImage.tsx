import styled from 'styled-components';
import { MyImageProps } from './MyImage.types';

const StyledImage = styled.img<{ width?: string; height?: string; disabled?: boolean; disabledBackgroundColor?: string }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};

`;

const MyImage: React.FC<MyImageProps & { disabledBackgroundColor?: string }> = ({ src, alt, width, height, style, disabled = false }) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} style={style} disabled={disabled}  />;
};

export default MyImage;
