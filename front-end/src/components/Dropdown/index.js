import React from "react";
import useDropdown from "../../hooks/dropdown.js";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderTop: "1px solid #C7C7CD",
    borderBottom: "1px solid #C7C7CD"
  },

  dropdownHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    alignItems: "center",
    fontWeight: 700,
    color: "black",
    opacity: 0.6
  },

  button: {
    border: 0,
    fontSize: 20,
    cursor: "pointer"
  }
};

const Dropdown = ({ children, onClick }) => {
  const { setIsDropped, isDropped } = useDropdown();
  console.log(children);
  return (
    <div style={localStyles.container}>
      <button
        onClick={() => setIsDropped(!isDropped)}
        style={localStyles.collapsibleHeader}
      >
        <span style={localStyles.button}>{isDropped ? "▲" : "▼"}</span>
      </button>
      <div onClick={onClick}>{isDropped && children}</div>
    </div>
  );
};

export default Dropdown;
