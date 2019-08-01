import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { removeUser } from "../actions";

const Logoff = ({ history, removeUser }) => {
  const logoff = () => {
    localStorage.removeItem("token");
    console.log(removeUser);
    removeUser();
    history.push("/login");
  };

  return <button onClick={logoff}>Sair</button>;
};

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(removeUser())
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Logoff));
