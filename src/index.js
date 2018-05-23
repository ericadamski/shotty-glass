import React, { Component } from 'react';
import { render } from 'react-dom';
import './global.styled';

import DropZone from './components/dropzone';
import Chooser from './components/chooser';
import { Wrapper } from './index.styled';

class Page extends Component {
  state = { files: [] };

  render() {
    /*<DropZone />*/

    return (
      <Wrapper>
        <Chooser />
      </Wrapper>
    );
  }
}

render(<Page />, document.getElementById('root'));
