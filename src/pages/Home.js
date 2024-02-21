import React, { useState } from "react";
import Login from "../pages/Login";
import LeftMenu from "../design/LeftMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div>This is Home - Available for All</div>
    </>
  );
};

export default Home;
