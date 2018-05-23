import styled from 'styled-components';
import colors from '../../utils/colors';

export const Button = styled.button`
  border-radius: 100%;
  position: fixed;
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

  right: 80px;
  bottom: 15px;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
