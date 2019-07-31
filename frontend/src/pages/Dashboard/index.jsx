import React, { useEffect } from "react";
import { connect } from "react-redux";

import verifyToken from "../../utils/VerifyToken";
import Logoff from "../../components/Logoff";
import { Container } from "./style";
import Header from "../../components/DashboardHeader";
import { addUser } from "../../actions";

const Admin = ({ history, addUser }) => {
  useEffect(() => {
    const validateToken = async () => {
      let validToken = await verifyToken();
      if (!validToken) history.push("/login");

      addUser(validToken.data.id, validToken.data.nome, validToken.data.email);

      console.log("token", validToken);
    };

    validateToken();
  }, [history]);

  return (
    <Container>
      <Header />
      <Logoff />
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addUser: (userId, nome, email) => dispatch(addUser(userId, nome, email))
});

export default connect(
  null,
  mapDispatchToProps
)(Admin);
