import React, { Component, Fragment } from 'react';

import View from '../view';
import Download from '../download';
import Reset from '../reset';
import ColorPickerButton from '../color-button';

import { Group, WindowColorChooser } from './index.styled';

export default class Chooser extends Component {
  state = { color: null, dark: false };
  onColorChangeHandler = color => {
    this.setState({ color });
  };

  onToggle(dark) {
    this.setState({ dark });
  }

  render() {
    const { file, reset } = this.props;
    const { color, dark } = this.state;
    return (
      <Fragment>
        <WindowColorChooser onToggle={this.onToggle.bind(this)} />
        <View file={file} dark={dark} background={color} />
        <Group>
          <Reset reset={reset} />
          <Download name={file.name} reset={reset} />
          <ColorPickerButton
            onColorChange={this.onColorChangeHandler}
            color={color}
          />
        </Group>
      </Fragment>
    );
  }
}
