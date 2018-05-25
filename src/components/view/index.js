import React from 'react';
import { Circle } from 'react-color';

import Window from '../window';
import { Wrapper } from './index.styled';

export default ({ file, background, dark }) => (
  <Wrapper id="capture" background={background}>
    <Window file={file} dark={dark} />
  </Wrapper>
);
