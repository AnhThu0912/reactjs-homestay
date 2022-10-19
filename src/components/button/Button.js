import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div
      style={{
        float: "right",
        marginTop: "30px",
        marginRight: "-50px",
      }}
    >
      <button className="button-back">Trở lại</button>
      <span>1</span>
      <span
        style={{
          margin: "0 15px",
        }}
      >
        2
      </span>
      <span
        style={{
          backgroundColor: "beige",
          padding: "4px",
        }}
      >
        3
      </span>
      <button className="button-next">Tiếp theo</button>
    </div>
  );
};

export default Button;
