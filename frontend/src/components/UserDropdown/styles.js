import styled from "styled-components";

export const Container = styled.div`
  ${props => (props.visiblity ? "opacity: 1" : "opacity: 0")}
  position: absolute;
  top: 70px;
  right: 30px;
  background: #282d37;
  width: 150px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  ul {
    list-style: none;
    width: 100%;
  }

  li {
    border-bottom: 1px solid #dcdde1;
  }

  li:last-child {
    border: none;
  }
  button {
    width: 100%;
    font-family: Roboto;
    font-size: 12px;
    line-height: 30px;
    text-decoration: none;
    color: #dcdde1;
    background: transparent;
    outline: 0;
    cursor: pointer;
    text-align: center;
    border: none;
  }

  button:hover {
    color: #ffaa00;
  }
`;
