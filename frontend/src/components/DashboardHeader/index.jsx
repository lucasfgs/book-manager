import React, { useState } from "react";
import { connect } from "react-redux";

// import "../../../node_modules/react-dropdown/style.css";
import { Container, Menu, Item, Profile } from "./styles";
import logo from "../../assets/image/logo.svg";
import avatar from "../../assets/image/avatar.svg";
import UserDropdown from "../UserDropdown";

import { MdArrowDropDown } from "react-icons/md";

const Header = ({ user }) => {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    visibility ? setVisibility(false) : setVisibility(true);
  };

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
          <span onClick={toggleVisibility}>
            {user.nome} <MdArrowDropDown className="dropDownIcon" size={30} />
          </span>
          <UserDropdown visiblity={visibility} />
        </Profile>
      </nav>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
