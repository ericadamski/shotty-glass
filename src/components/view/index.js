import React from 'react';

import Window from '../window';
import { Wrapper } from './index.styled';

export default ({ file, dark }) => (
  <Wrapper id="capture">
    <Window file={file} dark={dark} />
  </Wrapper>
);
