import React from 'react';

import { Controls, Wrapper, Window, ImgContainer, Img } from './index.styled';

export default ({ file: { src, width, height } }) => (
  <Wrapper width={width} height={height}>
    <Controls />
    <Window>
      <ImgContainer>
        <Img src={src} />
      </ImgContainer>
    </Window>
  </Wrapper>
);
