import React, { Component } from 'react';
import { Drop, Detail } from './index.styled';

export default class DropZone extends Component {
  render() {
    return (
      <Drop
        accept="image/jpeg, image/png"
        onDrop={this.props.onDrop}
        multiple={false}
      >
        <Detail>
          <span role="img" aria-label="shot glass">
            🥃
          </span>{' '}
          Drag and Drop your files and make them prettier here!
        </Detail>
      </Drop>
    );
  }
}
