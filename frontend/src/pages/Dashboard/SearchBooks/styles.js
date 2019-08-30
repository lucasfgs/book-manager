import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #2f3542;
`;

export const Search = styled.div`
  display: flex;

  margin: 20px auto;

  input {
    background-color: transparent;
    outline: 0;
    border: 2px solid #ffaa00;
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 15px;
    color: #dcdde1;
  }

  button {
    background-color: transparent;
    border: 2px solid #ffaa00;
    border-left: 0;
    height: 40px;
    width: 50px;
    cursor: pointer;
  }
`;
