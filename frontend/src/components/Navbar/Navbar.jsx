import React from "react";
import { Link } from "react-router-dom";
import { NavBar, NavCenter, NavLogo, NavLink } from "./styles";

const Navbar = () => {
  return (
    <NavBar>
      <NavCenter>
        <NavLogo>
          <Link
            style={{ textDecoration: "none", color: "rgb(216, 216, 216)" }}
            to="/"
          >
            <span>Hurri</span>Cane.
          </Link>
        </NavLogo>
        <div>
          <NavLink>Explore</NavLink>
          <NavLink>About</NavLink>
        </div>
      </NavCenter>
    </NavBar>
  );
};

export default Navbar;
