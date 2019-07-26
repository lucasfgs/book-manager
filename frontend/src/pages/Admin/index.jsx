import React, { useEffect } from "react";

import verifyToken from "../../utils/VerifyToken";
import Logoff from "../../components/Logoff";

const Admin = props => {
  useEffect(() => {
    const validateToken = async () => {
      let validToken = await verifyToken();
      if (!validToken) props.history.push("/login");

      console.log(validToken);
    };

    validateToken();
  }, [props.history]);

  return (
    <div>
      <p>Olá você é um administrador!</p>
      <Logoff />
    </div>
  );
};

export default Admin;
