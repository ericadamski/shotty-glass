import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../utils/colors';
import { Controls as C } from '../svg/controls';

const ControlContainer = styled.div`
  position: absolute;
  padding: 5px 7.5px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
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
  margin-top: 29px;
`;

export const Wrapper = styled.div`
  width: ${({ width }) => `${Math.min(width, 800 * 0.85)}px` || '80%'};
  height: ${({ height }) => `${Math.min(height, 600 * 0.85) + 10}px` || '80%'};
  position: relative;

  ${Img} {
    ${({ width, height }) =>
      height > width &&
      css`
        height: 100%;
        width: auto;
      `};
  }
`;
