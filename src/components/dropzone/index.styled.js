import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import colors from '../../utils/colors';

export const Drop = styled(Dropzone)`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 3px solid ${colors.rgba.yellow};
  border-radius: 3.5px;
`;

export const Detail = styled.p`
  color: ${colors.text};
`;
