import React from "react";

import { Container } from "./styles";
import Logoff from "../../components/Logoff";

const DropDown = ({ visiblity }) => (
  <Container visiblity={visiblity}>
    <ul>
      <li>
        <button>Minha conta</button>
      </li>
      <li>
        <button>Configurações</button>
      </li>
      <li>
        <Logoff />
      </li>
    </ul>
  </Container>
);

export default DropDown;
