import React from "react";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    zIndex: "1",
    // height: "100px",
    width: "100%"
  }
};

const Navbar = ({ children, height }) => {
  return <div style={{ ...localStyles.container, height }}>{children}</div>;
};

export default Navbar;
