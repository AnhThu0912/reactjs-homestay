import React from "react";
import "./Option.css";
import { HiOutlineInformationCircle } from "react-icons/hi";

function Option(props) {
  return (
    <div className="option">
      <h1 className="option-heading">{props.heading}</h1>
      <i className="option-icon">
        <HiOutlineInformationCircle />
      </i>
    </div>
  );
}
export default Option;
