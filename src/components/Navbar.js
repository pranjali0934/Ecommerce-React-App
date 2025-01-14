import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> HOME </Link>
          <Link to="/menu"> SHOP </Link>
          <Link to="/about"> ABOUT </Link>
          <Link to="/contact"> CONTACT </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> HOME </Link>
        <Link to="/menu"> SHOP </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/contact"> CONTACT </Link>
        <Link to="/LoginRegister">LOGIN/ REGISTER</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
