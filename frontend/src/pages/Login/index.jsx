import React, { useState } from "react";
import axios from "axios";

import LoginForm from "../../components/LoginForm";

function Login(props) {
  const API_URL = "http://localhost:4000/auth/login";

  const [login, setLogin] = useState({ email: "", password: "", error: false });

  const setValues = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      let resp = await axios.post(API_URL, {
        email: login.email,
        password: login.password
      });
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token);
        props.history.push("/admin");
        console.log(resp.data);
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

export default Login;
