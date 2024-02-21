import React, { useState } from "react";
import Login from "../Login";
import LeftMenu from "../../design/LeftMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const CustomerHome = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="flex">
        <button
          onClick={toggleMenu}
          className="fixed left- top-0 m-4 p-2 bg-gray-800 text-white"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <LeftMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <div>Customer DashBoard</div>
    </>
  );
};

export default CustomerHome;
