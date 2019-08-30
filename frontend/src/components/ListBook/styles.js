import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f3542;
  box-shadow: 10px 13px 17px 4px #1d2235;

  &:first-child {
    margin-top: 20px;
  }

  ul {
    list-style: none;
    width: 80%;
  }

  img {
    width: 140px;
    height: 200px;
    object-fit: contain;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 20px;
`;

export const Info = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 0 20px;
`;
