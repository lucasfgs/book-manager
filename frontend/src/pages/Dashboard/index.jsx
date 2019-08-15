import React, { useEffect } from "react";
import { connect } from "react-redux";

import verifyToken from "../../utils/VerifyToken";
import { Container } from "./styles";
import Header from "../../components/DashboardHeader";
import { addUser } from "../../actions";

const Admin = ({ history, addUser, user }) => {
  useEffect(() => {
    const validateToken = async () => {
      let validToken = await verifyToken();
      if (!validToken) history.push("/login");
      else {
        addUser(
          validToken.data.id,
          validToken.data.nome,
          validToken.data.email
        );
      }
    };

    validateToken();
  }, [history, addUser]);

  return <Container>{user.logged && <Header />}</Container>;
};

const mapDispatchToProps = dispatch => ({
  addUser: (userId, nome, email) => dispatch(addUser(userId, nome, email))
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
