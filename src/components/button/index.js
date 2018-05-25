import React from 'react';

import { Button, Tooltip, Wrapper } from './index.styled';

export default ({ className, children, click, tip }) => (
  <Wrapper>
    {tip && <Tooltip>{tip}</Tooltip>}
    <Button className={className} onClick={click}>
      {children}
    </Button>
  </Wrapper>
);
