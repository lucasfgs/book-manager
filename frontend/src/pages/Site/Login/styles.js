import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    object-fit: cover;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    filter: blur(2px);
  }
`;
