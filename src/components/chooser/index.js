import React, { Component, Fragment } from 'react';

import View from '../view';
import Download from '../download';
import Reset from '../reset';

export default class Chooser extends Component {
  render() {
    return (
      <Fragment>
        <View file={this.props.file} />
        <Download name={this.props.file.name} reset={this.props.reset} />
        <Reset reset={this.props.reset} />
      </Fragment>
    );
  }
}
