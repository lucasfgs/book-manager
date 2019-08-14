import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ListBook from "../../../components/ListBook";
import { Container, Menu, Books } from "./styles.js";
import api from "../../../services/api";

const MyBooks = ({ user }) => {
  const userId = user.userId;
  const API_URL = `user/myBooks/`;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getData() {
      if (userId > 0) {
        let response = await api.get(API_URL + userId);
        console.log(response.data[0].livros);
        setBooks(response.data[0].livros);
      }
    }
    getData();
  }, [API_URL, userId]);

  return (
    <Container>
      <Menu>
        <h2>Livros</h2>
        <h2>Filtros</h2>
      </Menu>
      <Books>
        {books.map(book => (
          <ListBook
            title={book.nome}
            author={book.autor}
            genere={book.genero}
            sinopse={book.sinopse}
            image={book.imgUrl}
          />
        ))}
      </Books>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(MyBooks);
