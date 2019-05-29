import React from "react";
import useAuthorisation from "../../hooks/authorisation";
import AuthForm from "../AuthForm";

const localStyles = {
  container: {
    backgroundColor: "blue"
  }
};

const Login = props => {
  const {
    setPassword,
    setUsername,
    login,
    password,
    username
  } = useAuthorisation(props.history);
  return (
    <div style={localStyles.container}>
      <AuthForm
        setPassword={setPassword}
        setUsername={setUsername}
        onClick={login}
        password={password}
        username={username}
        buttonText={"Login"}
        formText={"Please Login: "}
        usernamePlaceholder={"Enter your username..."}
        passwordPlaceholder={"Enter your password..."}
      />
    </div>
  );
};

export default Login;
