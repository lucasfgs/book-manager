import React, { useState } from "react";

import api from "../../../services/api";
import LoginForm from "../../../components/LoginForm";
import background from "../../../assets/image/LoginPage/bg.jpg";

import { Container } from "./styles";

function Login({ history }) {
  const API_URL = "auth/login";

  const [login, setLogin] = useState({ email: "", senha: "", error: false });

  const setValues = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      let resp = await api.post(API_URL, {
        email: login.email,
        senha: login.senha
      });
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token);
        console.log(resp.data.user);
        history.push("/dashboard");
      }
    } catch {
      setLogin({ ...login, error: true });
    }
  };

  return (
    <Container>
      <img src={background} alt="Background" />
      <LoginForm
        handleEmail={setValues}
        handlePassword={setValues}
        onSubmit={onSubmit}
        error={login.error}
      />
    </Container>
  );
}

export default Login;
