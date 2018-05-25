import React, { Component, Fragment } from 'react';
import { CirclePicker } from 'react-color';

import View from '../view';
import Download from '../download';
import Reset from '../reset';
import ColorPickerButton from '../color-button';

import { Group } from './index.styled';
import { consolidateStreamedStyles } from 'styled-components';

export default class Chooser extends Component {
  state = { color: null };
  onColorChangeHandler = color => {
    this.setState({ color });
  };

  render() {
    const { color } = this.state;
    return (
      <Fragment>
        <View file={this.props.file} background={this.state.color} />
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
