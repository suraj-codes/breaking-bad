import React from "react";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  return (
    <header
      className="center"
      onClick={() => {
        history.push("/");
      }}
    >
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
