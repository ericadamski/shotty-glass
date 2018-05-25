import React, { Component, Fragment } from 'react';
import { CustomPicker } from 'react-color';
import {
  CircleContainer,
  HexInput,
  HexLabel,
  HexInputContainer,
} from './index.styled';

import { isHexColor } from 'validator';

import { CirclePicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';

export default class MyColorPicker extends Component {
  state = { color: this.props.color || '#E3655B' };

  onColorChangeHandler = ({ hex }) => {
    const { onColorChange } = this.props;

    isHexColor(hex) && onColorChange(hex);
    this.setState({ color: hex });
  };

  onInputHandler = e => {
    const hexString = `#${e.target.value}`;
    this.onColorChangeHandler({ hex: hexString });
  };

  onKeyPressHandler = ({ key }) => {
    if (key === 'Enter') this.props.closePicker();
  };

  render() {
    const { closePicker } = this.props;
    const { color } = this.state;
    return (
      <Fragment>
        <CirclePicker
          onChange={color => {
            this.onColorChangeHandler(color);
            closePicker();
          }}
          onSwatchHover={this.onColorChangeHandler}
        />
        <HexInputContainer>
          <HexLabel>{'#'}</HexLabel>
          <HexInput
            onChange={this.onInputHandler}
            value={color.replace('#', '')}
            background={isHexColor(color) ? color : '#000'}
            onKeyPress={this.onKeyPressHandler}
          />
        </HexInputContainer>
      </Fragment>
    );
  }
}
