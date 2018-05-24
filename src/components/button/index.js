import React from 'react';

import { Button, Tooltip } from './index.styled';

export default ({ className, children, click, tip }) => (
  <Button className={className} onClick={click}>
    {tip && <Tooltip>{tip}</Tooltip>}
    {children}
  </Button>
);
