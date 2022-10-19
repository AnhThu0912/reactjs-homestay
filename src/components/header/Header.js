import React from "react";
import logo from "./tripadvisor_logo_icon_detail.png";
import { BsHeart } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

function Header() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-logo-home">
          <img src={logo} className="app-logo" alt="logo" />
          <p className="app-heading">BeHome</p>
        </div>
        <div className="app-heading-info">
          <i
            style={{
              display: "flex",
              marginRight: "5px",
            }}
          >
            <BsHeart />
          </i>
          <p className="app-heading-tips">Tips</p>
          <i
            style={{
              display: "flex",
              position: "relative",
              right: "-18px",
            }}
          >
            <HiOutlineInformationCircle />
          </i>
          <p className="app-heading-about-us">About us</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
