import React from "react";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  collapsibleHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 16,
    alignItems: "center"
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 20,
    cursor: "pointer"
  }
};

const Collapsible = ({ children, isOpen, setIsOpen, text }) => {
  return (
    <div style={localStyles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={localStyles.collapsibleHeader}
      >
        <span>{text}</span>
        <span style={localStyles.button}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && children}
    </div>
  );
};

export default Collapsible;
