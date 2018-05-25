import React, { Component, Fragment } from 'react';
import { CirclePicker } from 'react-color';

import View from '../view';
import Download from '../download';
import Reset from '../reset';
import ColorPickerButton from '../color-button';

<<<<<<< HEAD
import { Group } from './index.styled';
import { consolidateStreamedStyles } from 'styled-components';

export default class Chooser extends Component {
  state = { color: null };
  onColorChangeHandler = color => {
    this.setState({ color });
  };
=======
import { Group, WindowColorChooser } from './index.styled';

export default class Chooser extends Component {
  state = { dark: false };

  onToggle(dark) {
    this.setState({ dark });
  }
>>>>>>> upstream/master

  render() {
    const { color } = this.state;
    return (
      <Fragment>
<<<<<<< HEAD
        <View file={this.props.file} background={this.state.color} />
=======
        <WindowColorChooser onToggle={this.onToggle.bind(this)} />
        <View file={this.props.file} dark={this.state.dark} />
>>>>>>> upstream/master
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
