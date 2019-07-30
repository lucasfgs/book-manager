import React, { useEffect } from "react";

import verifyToken from "../../utils/VerifyToken";
import Logoff from "../../components/Logoff";
import { Container } from "./style";

const Admin = props => {
  useEffect(() => {
    const validateToken = async () => {
      let validToken = await verifyToken();
      if (!validToken) props.history.push("/login");

      console.log(validToken);
    };

    validateToken();
  }, [props.history]);

  return <Container />;
};

export default Admin;
