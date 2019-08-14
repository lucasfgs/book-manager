import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  &:first-child {
    margin-top: 20px;
  }

  ul {
    list-style: none;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Info = styled.p`
  font-size: 14px;
`;
