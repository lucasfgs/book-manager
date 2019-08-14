import React from "react";

import { Container, Title, Info } from "./styles";

const ListBook = ({ title, author, genere, sinopse, image }) => (
  <Container>
    <ul>
      <li>
        <Title>{title}</Title>
      </li>
      <li>
        <Info>{author}</Info>
      </li>
      <li>
        <Info>{genere}</Info>
      </li>
      <li>
        <Info>{sinopse}</Info>
      </li>
    </ul>
    <img src={image} />
  </Container>
);

export default ListBook;
