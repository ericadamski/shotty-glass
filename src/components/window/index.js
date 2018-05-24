import React from 'react';

import { Controls, Wrapper, Window, ImgContainer, Img } from './index.styled';

export default ({ file: { src, width, height }, dark }) => (
  <Wrapper width={width} height={height}>
    <Controls />
    <Window dark={dark}>
      <ImgContainer>
        <Img src={src} />
      </ImgContainer>
    </Window>
  </Wrapper>
);
