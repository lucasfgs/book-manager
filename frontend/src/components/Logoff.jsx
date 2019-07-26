import React from "react";

import { withRouter } from "react-router-dom";

const Logoff = props => {
  const logoff = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  return <button onClick={logoff}>Logoff</button>;
};

export default withRouter(Logoff);
