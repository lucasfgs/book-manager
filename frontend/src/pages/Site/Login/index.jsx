import React, { useState } from "react";
import api from "../../../services/api";
import { connect } from "react-redux";

import { addUser } from "../../../actions";
import LoginForm from "../../../components/LoginForm";

function Login({ history, addUser }) {
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
        addUser(
          resp.data.user.user_id,
          resp.data.user.nome,
          resp.data.user.email
        );
        history.push("/dashboard");
      }
    } catch {
      setLogin({ ...login, error: true });
    }
  };

  return (
    <div>
      <LoginForm
        handleEmail={setValues}
        handlePassword={setValues}
        onSubmit={onSubmit}
        error={login.error}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addUser: (userId, nome, email) => dispatch(addUser(userId, nome, email))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
