import React, { Component } from 'react';
import { render } from 'react-dom';
import './global.styled';

import DropZone from './components/dropzone';
import Chooser from './components/chooser';
import { Wrapper } from './index.styled';

class Page extends Component {
  state = { file: null };

  onDrop([file]) {
    const r = new FileReader();
    const i = new Image();

    i.name = file.name.split('.')[0] || 'anonymous';

    r.onloadend = e => (i.src = r.result);
    i.onload = () => this.setState({ file: i });
    r.readAsDataURL(file);
  }

  render() {
    return (
      <Wrapper>
        {this.state.file ? (
          <Chooser file={this.state.file} />
        ) : (
          <DropZone onDrop={this.onDrop.bind(this)} />
        )}
      </Wrapper>
    );
  }
}

render(<Page />, document.getElementById('root'));
