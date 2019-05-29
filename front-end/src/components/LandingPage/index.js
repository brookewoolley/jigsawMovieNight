import React from "react";
import { Link } from "react-router-dom";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
};

const LandingPage = () => {
  return (
    <div style={localStyles.container}>
      <Link style={localStyles.link} to="/signup">
        Sign Up
      </Link>
      <Link style={localStyles.link} to="/login">
        Login
      </Link>
    </div>
  );
};

export default LandingPage;
