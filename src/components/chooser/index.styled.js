import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../button';
import colors from '../../utils/colors';

export const Group = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const ChooserButton = styled(Button)`
  position: relative;
  margin: 0 5rem;
  padding: 0;
  position: relative;
  border: none;
  height: 1.5rem;
  width: 3rem;
  border-radius: 2.5rem;
  background: ${({ active }) => (active ? colors.rgba.blue : colors.rgba.grey)};
  border: 1px solid ${colors.text};
  transition: background-color 0.25s;

  &:before,
  &:after {
    position: absolute;
    color: ${colors.text};
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: 'light';
    left: -2rem;
    font-weight: ${({ active }) => !active && 'bold'};
  }

  &:after {
    content: 'dark';
    right: -2rem;
    font-weight: ${({ active }) => active && 'bold'};
  }
`;

const Handle = styled.div`
  position: absolute;
  left: ${({ active }) => (active ? 1.8125 : 0.3125)}rem;
  border-radius: 100%;
  background-color: ${colors.text};
  height: 0.875rem;
  width: 0.875rem;
  transition: left 0.25s;
`;

class ColorChooser extends Component {
  state = { active: false };

  toggle() {
    this.setState(
      ({ active }) => ({ active: !active }),
      () => this.props.onToggle && this.props.onToggle(this.state.active)
    );
  }

  render() {
    return (
      <ChooserButton
        className={this.props.className}
        click={this.toggle.bind(this)}
        active={this.state.active}
      >
        <Handle active={this.state.active} />
      </ChooserButton>
    );
  }
}

export const WindowColorChooser = styled(ColorChooser)`
  position: fixed;
  top: 15px;
  left: 15px;
`;
