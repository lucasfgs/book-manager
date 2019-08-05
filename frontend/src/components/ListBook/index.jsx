import React from "react";

import { Container, Title, Info } from "./styles";

const ListBook = () => (
  <Container>
    <ul>
      <li>
        <Title>Titulo do livro</Title>
      </li>
      <li>
        <Info>Autor</Info>
      </li>
      <li>
        <Info>Gênero</Info>
      </li>
      <li>
        <Info>Sinopse</Info>
      </li>
    </ul>
    <Info>Imagem</Info>
  </Container>
);

export default ListBook;
