import React from "react";
import "./Like.css";

const Like = (props) => {
  return (
    <div className="like-desc">
      <img className="like-img" src={props.image} alt="" />
      <h1
        style={{
          marginBottom: "10px",
        }}
      >
        Fusion Suites Saigon
      </h1>
      <h2
        style={{
          color: "orange",
        }}
      >
        12.000k/tháng
      </h2>
      <p>Ho Chi Minh City, Vietnam</p>
    </div>
  );
};

export default Like;
