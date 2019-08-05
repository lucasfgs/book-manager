import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import "../../../node_modules/react-dropdown/style.css";
import { Container, Menu, Item, Profile } from "./styles";
import logo from "../../assets/image/logo.svg";
import avatar from "../../assets/image/avatar.svg";
import UserDropdown from "../UserDropdown";
import * as Route from "../../constants/routes";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

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
            <Link to={Route.DASHBOARD}>
              <button>Início</button>
            </Link>
          </Item>
          <Item>
            <Link to={Route.MY_BOOKS}>
              <button>Meus Livros</button>
            </Link>
          </Item>
          <Item>
            <Link to={Route.SEARCH_BOOKS}>
              <button>Buscar Livros</button>
            </Link>
          </Item>
        </Menu>
        <Profile>
          <img src={avatar} alt="User avatar" className="userImage" />
          <span onClick={toggleVisibility}>
            {user.nome}{" "}
            {visibility ? (
              <MdArrowDropUp className="dropDownIcon" size={30} />
            ) : (
              <MdArrowDropDown className="dropDownIcon" size={30} />
            )}
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
