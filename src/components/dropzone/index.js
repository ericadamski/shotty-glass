import React, { Component } from 'react';
import { Drop, Detail } from './index.styled';

export default class DropZone extends Component {
  render() {
    return (
      <Drop>
        <Detail>
          🥃 Drag and Drop your files and make them prettier here!
        </Detail>
      </Drop>
    );
  }
}
