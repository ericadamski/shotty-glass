import styled from 'styled-components';

import { EditableInput } from 'react-color/lib/components/common';

export const HexInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HexLabel = styled.div`
  background: black;
  height: 20px;
  width: 30px;
  border-radius: 4px 0px 0px 4px;
  padding: 3px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HexInput = styled.input`
  background-color: ${({ background }) => background};
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  height: 20px;
  width: 100%;
  border: none;
  margin: 5px 5px 5px 0px;
  padding: 3px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  outline: none;
`;
