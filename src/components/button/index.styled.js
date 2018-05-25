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

export const Tooltip = styled.span`
  position: absolute;
  background-color: ${colors.text};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3px 2.5px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 3px;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  height: 16px;
  transition-delay: 0.2s;
  transition: opacity 0.2s ease;
  opacity: 0;
`;

export const Wrapper = styled.div`
  position: relative;

  &:hover {
    ${Tooltip} {
      opacity: 1;
    }
  }
`;
