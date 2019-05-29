import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../config";

const useAuthorisation = history => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const login = async () => {
    //post request to DB, returns token and username - error if incorrect datatypes
    //session token when logged in lasts 24 hours
    try {
      const params = {
        method: "post",
        url: backendUrl + "users/signin",
        data: {
          username,
          password
        }
      };
      const { data } = await axios(params);

      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("username", data.username);
      history.push("/popular");
    } catch (err) {
      console.error("nahh mate", err);
    }
  };

  const signUp = async () => {
    //post request to DB, returns token and username - error if incorrect datatypes
    try {
      const params = {
        method: "post",
        url: backendUrl + "users/signup",
        data: {
          username,
          password
        }
      };
      console.log("------> PARAMS", params);
      const { data } = await axios(params);

      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("username", data.username);
      history.push("/popular");
    } catch (err) {
      console.error("you failed", err);
    }
  };

  return {
    signUp,
    setPassword,
    setUsername,
    password,
    username,
    login
  };
};

export default useAuthorisation;
