import React from "react";

const RegisterForm = ({
  register,
  handleName,
  handleEmail,
  handlePassword
}) => {
  return (
    <div>
      <form onSubmit={register}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleName} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" onChange={handleEmail} />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
