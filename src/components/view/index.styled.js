import styled from 'styled-components';
import colors from '../../utils/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.background || colors.rgba.pink};
`;
