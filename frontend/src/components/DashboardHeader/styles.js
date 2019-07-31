import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background: #353b48;
    color: #dcdde1;

    img {
      width: 140px;
      height: 73px;
      margin-left: 30px;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  margin-right: 100px;

  button {
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
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

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  .userImage {
    border-radius: 50px;
    width: 60px;
    height: 60px;
  }
  span {
    font-family: Roboto;
    font-size: 18px;
    line-height: 21px;
    margin-left: 7px;
  }
`;

export const DropDown = styled.select`
  padding: 0;
  margin: 0 0 0 10px;
  height: 23px !important;
  color: #dcdde1;
  background: transparent;
  border: 0;
`;
