import React from "react";
import "./Trending.css";

const Trending = (props) => {
  return (
    <div className="trending-desc">
      <img className="trending-img" src={props.img} alt="" />
      <p>Bình Thạnh</p>
    </div>
  );
};

export default Trending;
