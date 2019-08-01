import React from "react";

import { Container } from "./styles";

const Login = props => {
  return (
    <Container>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={props.handleEmail}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="senha"
          id="password"
          onChange={props.handlePassword}
        />
        <button type="submit">Login</button>
      </form>
      {props.error && <span>Erro ao realizar login</span>}
    </Container>
  );
};

export default Login;
