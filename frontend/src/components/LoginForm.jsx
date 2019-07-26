import React from "react";

function Login(props) {
  return (
    <div className="login-form">
      {props.error && <span>Erro ao realizar login</span>}
      <form onSubmit={props.onSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={props.handleEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={props.handlePassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
