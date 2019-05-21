import React from "react";

const localStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: "1",
        height: "100px",
        width: "100%",
        backgroundColor: "blue"
    }
}

const Navbar = ({children}) => {
    return (
        <div style={localStyles.container}>
            {children}
        </div>
    )
}

export default Navbar;