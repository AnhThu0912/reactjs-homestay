import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        marginTop: "150px",
        height: "200px",
        padding: "50px 50px",
        position: "absolute",
        left: 0,
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        beHome
      </h1>
      <p>
        TripAdvisor LLC is not responsible for content on external web sites.
        Texas, fees not included for deal contents. <br />
        TripAdvisor LLC is not responsible for content on external web sites
        <br />
        Taxes, fees not included for deals content.
      </p>
    </div>
  );
};

export default Footer;
