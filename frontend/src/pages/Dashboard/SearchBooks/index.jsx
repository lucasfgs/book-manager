import React from "react";
import { MdSearch } from "react-icons/md";

import { Container, Search } from "./styles.js";

const SearchBooks = () => {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Insira o livro desejado" />
        <button>
          <MdSearch color="#ffaa00" size={25} />
        </button>
      </Search>
    </Container>
  );
};

export default SearchBooks;
