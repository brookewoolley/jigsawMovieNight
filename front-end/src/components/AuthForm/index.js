import React from "react";

const localStyles = {
  container: {
    backgroundColor: "blue"
  }
};

const AuthForm = ({
  setPassword,
  setUsername,
  onClick,
  password,
  username,
  formText,
  buttonText,
  usernamePlaceholder,
  passwordPlaceholder
}) => {
  return (
    <div style={localStyles.container}>
      {formText}
      <input
        type="text"
        onChange={e => setUsername(e.target.value)}
        placeholder={usernamePlaceholder}
        value={username}
      />
      <input
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder={passwordPlaceholder}
        value={password}
      />
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default AuthForm;
