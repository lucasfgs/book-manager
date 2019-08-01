import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 40vh;
  width: 250px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.6);
  font-family: Roboto;

  span {
      margin-top: 10px
    color: rgba(200, 0, 0, 0.8);
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  label {
    margin-top: 10px;
    font-weight: 500;
  }

  input {
    margin-top: 5px;
    border: none;
    border-bottom: 2px solid black;
    border-radius: 2px;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    height: 25px;
  }

  input:focus,
  button:focus {
    outline: none;
  }

  button {
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 2px;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
  }

  button:hover {
    color: #27ae60;
    border: 2px solid #27ae60;
  }
`;
