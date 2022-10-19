import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Find.css";
import Image from "./working.jpeg";

const Find = () => {
  return (
    <div className="find-container">
      <div className="find-desc">
        <h1 className="find-heading">Find The Good Out There.</h1>
        <div className="find-search">
          <i>
            <BiSearchAlt />
          </i>
          <input type="text" placeholder="What are you looking for?" />
        </div>
      </div>
      <div>
        <img src={Image} alt="" className="find-img" />
      </div>
    </div>
  );
};

export default Find;
