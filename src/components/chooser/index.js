import React, { Component, Fragment } from 'react';

import View from '../view';
import Download from '../download';

export default class Chooser extends Component {
  render() {
    return (
      <Fragment>
        <View file={this.props.file} />
        <Download name={this.props.file.name} />
      </Fragment>
    );
  }
}
