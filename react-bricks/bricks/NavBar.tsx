import React, { Children } from "react";
import { Text, RichText, Image, types } from "react-bricks/frontend";

//=============================
// Local Types
//=============================

interface NavBarProps {}

//=============================
// Component to be rendered
//=============================
const NavBar: types.Brick<NavBarProps> = () => {
  return <h1 className="text-white">Hello world</h1>;
};

//=============================
// Brick Schema
//=============================
NavBar.schema = {
  name: "nav-bar",
  label: "Nav bar component",
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default NavBar;
