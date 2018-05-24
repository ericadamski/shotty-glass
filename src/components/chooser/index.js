import React, { Component, Fragment } from 'react';

import View from '../view';
import Download from '../download';
import Reset from '../reset';

import { Group, WindowColorChooser } from './index.styled';

export default class Chooser extends Component {
  state = { dark: false };

  onToggle(dark) {
    this.setState({ dark });
  }

  render() {
    return (
      <Fragment>
        <WindowColorChooser onToggle={this.onToggle.bind(this)} />
        <View file={this.props.file} dark={this.state.dark} />
        <Group>
          <Reset reset={this.props.reset} />
          <Download name={this.props.file.name} reset={this.props.reset} />
        </Group>
      </Fragment>
    );
  }
}
