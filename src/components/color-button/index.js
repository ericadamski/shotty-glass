import React, { Component, Fragment } from 'react';

import CustomPicker from '../color-picker';
import Button from '../button';
import { PickerContainer, Container } from './index.styled';

export default class ColorButton extends Component {
  state = { showPicker: false };

  setShowPickerState = () =>
    this.setState({ showPicker: !this.state.showPicker });

  render() {
    const { color, onColorChange } = this.props;
    const { showPicker } = this.state;
    return (
      <Fragment>
        {showPicker && (
          <PickerContainer>
            <CustomPicker
              onColorChange={onColorChange}
              closePicker={this.setShowPickerState}
              color={color}
            />
          </PickerContainer>
        )}
        <Button
          tip={showPicker ? null : 'BG color'}
          click={() => {
            this.setShowPickerState();
          }}
        >
          <span role="img" aria-label="choose background color">
            🌈
          </span>
        </Button>
      </Fragment>
    );
  }
}
