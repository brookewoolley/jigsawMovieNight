import React from "react";
import useAuthorisation from "../../hooks/authorisation";
import AuthForm from "../AuthForm";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundImage:
      "linear-gradient(to bottom, rgba(15,214,175, 1), 20%, rgba(0,253,151,0.5)"
  }
};

const Login = props => {
  const {
    setPassword,
    setUsername,
    login,
    password,
    username,
    error,
    onFocus
  } = useAuthorisation(props.history);
  return (
    <div style={localStyles.container}>
      <AuthForm
        setPassword={setPassword}
        setUsername={setUsername}
        onClick={login}
        password={password}
        username={username}
        buttonText={"LOGIN"}
        formText={"LOGIN"}
        usernamePlaceholder={"Username"}
        passwordPlaceholder={"Password"}
        error={error}
        onFocus={onFocus}
      />
    </div>
  );
};

export default Login;
