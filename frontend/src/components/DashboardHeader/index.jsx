import React from "react";

// import "../../../node_modules/react-dropdown/style.css";
import { Container, Menu, Item, Profile, DropDown } from "./styles";
import logo from "../../assets/image/logo.svg";
import avatar from "../../assets/image/avatar.svg";

import { connect } from "react-redux";

const Header = ({ user }) => {
  const dropDownOptions = ["Configurações", "Minha conta", "Logoff"];
  console.log("Dashborad state:", user);
  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />
        <Menu>
          <Item>
            <button href="#">Início</button>
          </Item>
          <Item>
            <button href="#">Meus Livros</button>
          </Item>
          <Item>
            <button href="#">Buscar Livros</button>
          </Item>
        </Menu>
        <Profile>
          <img src={avatar} alt="User avatar" className="userImage" />
          <span>{user.nome}</span>
          <DropDown />
        </Profile>
      </nav>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
