import React, { Component } from 'react';

import CustomPicker from '../color-picker';
import Button from '../button';
import { PickerContainer, Container } from './index.styled';

export default class ColorButton extends Component {
  state = { showPicker: false };

  setShowPickerState = () =>
    this.setState({ showPicker: !this.state.showPicker });

  render() {
    return (
      <Container>
        {this.state.showPicker && (
          <PickerContainer>
            <CustomPicker
              onColorChange={this.props.onColorChange}
              closePicker={this.setShowPickerState}
              color={this.props.color}
            />
          </PickerContainer>
        )}
        <Button
          click={() => {
            this.setShowPickerState();
          }}
        >
          <span role="img" aria-label="download">
            🌈
          </span>
        </Button>
      </Container>
    );
  }
}
