import React from 'react';

import Button from '../button';

export default ({ reset }) => (
  <Button click={reset} tip="Upload New File">
    <span role="img" aria-label="reset">
      🙅‍
    </span>
  </Button>
);
