import React from "react";

const localStyles = {

};

const Collapsible = ({children, isOpen, setIsOpen}) => {
  return (
    <div>
      <div style={localStyles.container}>Collapsible</div>
      {children}
    </div>
    

  )
};

export default Collapsible;