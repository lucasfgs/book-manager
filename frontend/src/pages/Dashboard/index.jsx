import React, { useEffect } from "react";
import { connect } from "react-redux";

import verifyToken from "../../utils/VerifyToken";
import { Container } from "./styles";
import Header from "../../components/DashboardHeader";
import { addUser } from "../../actions";
import Home from "./Home";

const Admin = ({ history, addUser }) => {
  useEffect(() => {
    const validateToken = async () => {
      let validToken = await verifyToken();
      if (!validToken) history.push("/login");
      addUser(validToken.data.id, validToken.data.nome, validToken.data.email);
    };

    validateToken();
  }, [history, addUser]);

  return (
    <Container>
      <Header />
      {/* <Home /> */}
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
