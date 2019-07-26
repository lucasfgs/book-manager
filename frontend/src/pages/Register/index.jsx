import React, { useState } from "react";
import axios from "axios";

import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  const API_URL = "http://localhost:4000/auth/register";

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error: false
  });

  const setValues = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const registerUser = async e => {
    e.preventDefault();
    let resp = await axios.post(API_URL, {
      name: register.name,
      email: register.email,
      password: register.password
    });
    console.log(resp);
  };

  return (
    <RegisterForm
      register={registerUser}
      handleName={setValues}
      handleEmail={setValues}
      handlePassword={setValues}
    />
  );
};

export default Register;
