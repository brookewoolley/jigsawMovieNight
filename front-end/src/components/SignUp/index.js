import React from "react";
import useAuthorisation from "../../hooks/authorisation";
import AuthForm from "../AuthForm";

const localStyles = {
  container: {
    backgroundColor: "blue"
  }
};

const SignUp = props => {
  const {
    setPassword,
    setUsername,
    signUp,
    password,
    username
  } = useAuthorisation(props.history);
  return (
    <div style={localStyles.container}>
      <AuthForm
        setPassword={setPassword}
        setUsername={setUsername}
        onClick={signUp}
        password={password}
        username={username}
        buttonText={"Sign Up"}
        formText={"Create an account: "}
        usernamePlaceholder={"Enter a username..."}
        passwordPlaceholder={"Enter a password..."}
      />
    </div>
  );
};

export default SignUp;
