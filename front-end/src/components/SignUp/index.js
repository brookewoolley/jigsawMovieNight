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

const SignUp = props => {
  const {
    setPassword,
    setUsername,
    signUp,
    password,
    username,
    loading,
    error
  } = useAuthorisation(props.history);
  return (
    <div style={localStyles.container}>
      <AuthForm
        setPassword={setPassword}
        setUsername={setUsername}
        onClick={signUp}
        password={password}
        username={username}
        buttonText={"SIGN UP"}
        formText={"CREATE ACCOUNT"}
        usernamePlaceholder={"Username"}
        passwordPlaceholder={"Password"}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default SignUp;
