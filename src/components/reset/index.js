import React from 'react';

import { Button } from './index.styled';

export default ({ reset }) => (
  <Button onClick={reset}>
    <span role="img" aria-label="reset">
      🙅‍
    </span>
  </Button>
);
