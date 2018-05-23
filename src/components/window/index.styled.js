import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import { Controls as C } from '../svg/controls';

const ControlContainer = styled.div`
  position: absolute;
  padding: 10px 15px;
`;

export const Controls = () => (
  <ControlContainer>
    <C />
  </ControlContainer>
);

export const Window = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.window};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  background-color: ${colors.rgba.blue};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 35px;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
`;
