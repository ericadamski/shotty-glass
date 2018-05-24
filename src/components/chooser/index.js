import React, { Component, Fragment } from 'react';

import View from '../view';
import Download from '../download';
import Reset from '../reset';

import { Group } from './index.styled';

export default class Chooser extends Component {
  render() {
    return (
      <Fragment>
        <View file={this.props.file} />
        <Group>
          <Reset reset={this.props.reset} />
          <Download name={this.props.file.name} reset={this.props.reset} />
        </Group>
      </Fragment>
    );
  }
}
