import React from 'react';
import domToImage from 'dom-to-image';

import Button from '../button';

export default ({ name, reset }) => (
  <Button
    tip="Download"
    click={() => {
      const target = document.getElementById('capture');
      const config = {
        style: {
          transform: 'scale(2)',
          'transform-origin': 'center',
        },
        filter: n =>
          n.className
            ? String(n.className).indexOf('eliminateOnRender') < 0
            : true,
        width: target.offsetWidth * 2,
        height: target.offsetHeight * 2,
      };

      domToImage.toPng(target, config).then(function(dataUrl) {
        const link = document.createElement('a');
        link.download = `${name}-${Date.now()}.png`;
        link.href = dataUrl;
        link.dispatchEvent(new MouseEvent('click'));
        reset();
      });
    }}
  >
    <span role="img" aria-label="download">
      👇
    </span>
  </Button>
);
