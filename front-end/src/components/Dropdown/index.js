import React from "react";

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

const Dropdown = ({
  children,
  onClick,
  setIsDropped,
  isDropped,
  value,
  placeholder
}) => {
  return (
    <div style={localStyles.container}>
      <button
        onClick={() => setIsDropped(!isDropped)}
        style={localStyles.dropdownHeader}
      >
        <span>{value.length ? value : placeholder}</span>
        <span style={localStyles.button}>{isDropped ? "▲" : "▼"}</span>
      </button>
      <div style={localStyles.listItems} onClick={onClick}>
        {isDropped && children}
      </div>
    </div>
  );
};

export default Dropdown;
