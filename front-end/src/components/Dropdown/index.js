import React from "react";
import useDropdown from "../../hooks/dropdown.js";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },

  dropdownHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    opacity: 0.6
  },

  button: {
    border: 0,
    fontSize: 20,
    cursor: "pointer"
  },

  listItems: {
    opacity: 0.6
  }
};

const Dropdown = ({ children, onClick }) => {
  const { setIsDropped, isDropped } = useDropdown();
  return (
    <div style={localStyles.container}>
      <button
        onClick={() => setIsDropped(!isDropped)}
        style={localStyles.dropdownHeader}
      >
        <span style={localStyles.button}>{isDropped ? "▲" : "▼"}</span>
      </button>
      <div style={localStyles.listItems} onClick={onClick}>
        {isDropped && children}
      </div>
    </div>
  );
};

export default Dropdown;
