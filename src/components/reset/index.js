import React from 'react';

import Button from '../button';

export default ({ reset }) => (
  <Button click={reset} tip="Reset">
    <span role="img" aria-label="upload new file">
      🙅‍
    </span>
  </Button>
);
