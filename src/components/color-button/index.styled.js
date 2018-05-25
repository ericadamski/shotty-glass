import styled from 'styled-components';

export const Container = styled.div``;
export const PickerContainer = styled.div`
  position: fixed;
  padding: 8px;
  bottom: 100px;
  right: 45px;
  border-radius: 5px;
  background-color: white;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -20px;
    width: 0;
    height: 0;
    border-top: 30px solid rgba(255, 255, 255, 1);
    border-left: 30px solid transparent;
  }
`;
