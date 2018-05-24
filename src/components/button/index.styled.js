import styled from 'styled-components';
import colors from '../../utils/colors';

export const Button = styled.button`
  position: relative;
  border-radius: 100%;
  background-image: none;
  border: none;
  height: 50px;
  width: 50px;
  font-size: 2rem;
  line-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${colors.rgba.grey};
  background: ${colors.text};
  outline: none;
  margin: 0 5px;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: ${colors.text};
  padding: 2.5px 3px;
  font-size: 12px;
  border-radius: 3px;
  top: -5px;
`;
