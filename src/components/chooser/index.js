import React, { Component, Fragment } from 'react';
import { CirclePicker } from 'react-color';

import View from '../view';
import Download from '../download';
import Reset from '../reset';
import ColorPickerButton from '../color-button';

import { Group, WindowColorChooser } from './index.styled';
import { consolidateStreamedStyles } from 'styled-components';

export default class Chooser extends Component {
  state = { color: null, dark: false };
  onColorChangeHandler = color => {
    this.setState({ color });
  };

  onToggle(dark) {
    this.setState({ dark });
  }

  render() {
    const { color, dark } = this.state;
    return (
      <Fragment>
        <WindowColorChooser onToggle={this.onToggle.bind(this)} />
        <View file={this.props.file} dark={dark} background={color} />
        <Group>
          <Reset reset={this.props.reset} />
          <Download name={this.props.file.name} reset={this.props.reset} />
          <ColorPickerButton
            onColorChange={this.onColorChangeHandler}
            color={color}
          />
        </Group>
      </Fragment>
    );
  }
}
