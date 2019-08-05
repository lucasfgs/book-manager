import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ListBook from "../../../components/ListBook";
import { Container, Menu } from "./styles.js";
import api from "../../../services/api";

const MyBooks = ({ user }) => {
  const userId = user.userId;
  const API_URL = `user/myBooks/`;
  useEffect(async () => {
    let response = await api.get(API_URL + userId);
    console.log(response);
  }, []);

  return (
    <Container>
      <Menu>
        <h2>Livros</h2>
        <h2>Filtros</h2>
      </Menu>
      <ListBook />
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(MyBooks);
