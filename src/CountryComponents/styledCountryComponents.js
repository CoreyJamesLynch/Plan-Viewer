import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 90vw;
`;

const Panel = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.7s ease-in;
  &.active {
    flex: 5;
  }
  &.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
`;

const PanelHeader = styled.h3`
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
`;

export default Container;
export { Panel, PanelHeader };
