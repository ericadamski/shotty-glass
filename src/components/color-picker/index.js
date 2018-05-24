import React from 'react';
import domToImage from 'dom-to-image';

import Button from '../button';

export default ({ name, reset }) => (
  <Button tip="Background Color" click={() => {}}>
    <span role="img" aria-label="download">
      🌈
    </span>
  </Button>
);
