import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    right: 0,
    padding: 40,
    backgroundImage:
      "linear-gradient(to bottom, rgba(15,214,175, 1), 20%, rgba(0,253,151,0.5)"
  },
  link: {
    color: "black",
    textDecoration: "none",
    width: "100%"
  }
};

const fade = {
  backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,253,151,1)"
};

const LandingPage = () => {
  return (
    <div style={localStyles.container}>
      <div style={{ width: "100%" }}>
        <Link style={localStyles.link} to="/signup">
          <Button
            style={{
              marginBottom: 20
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link style={localStyles.link} to="/login">
          <Button
            style={{
              backgroundImage: "none",
              backgroundColor: "white",
              color: "#0FD6AF"
            }}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
