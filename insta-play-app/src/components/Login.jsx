import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { isValidInputlen } from "../helper/movie-helper";
import BarLoader from "./loaders/BarLoader";
import "../styles/Login.css";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const onChangeValidate = (name, value) => {
    if (isValidInputlen(value)) {
      setError({
        ...error,
        [name]: `${name} must be at least 3 characters.`,
      });
    } else {
      setError({
        ...error,
        [name]: "",
      });
    }
  };

  const onSubmitValidate = () => {
    let isInvalidInput = false;
    const { username, password } = loginInput;
    if (!username) {
      setError((prevError) => ({
        ...prevError,
        username: "Username is required.",
      }));
      isInvalidInput = true;
    }
    if (!password) {
      setError((prevError) => ({
        ...prevError,
        password: "Password is required.",
      }));
      isInvalidInput = true;
    }
    if (isValidInputlen(username) || isValidInputlen(password)) {
      isInvalidInput = true;
    }
    return isInvalidInput;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
    onChangeValidate(name, value);
  };

  const handleLogin = async () => {
    if (!onSubmitValidate()) {
      setLoading(true);
      const result = await login(loginInput.username, loginInput.password);
      if (result.success) {
        navigate("/movies");
      }
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign in</h1>
        <p>Sign in to your Self Service Portal</p>
        <div className="login-field">
          <label className="username">
            <input
              name="username"
              type="text"
              placeholder=""
              onChange={handleChange}
              required
            />
            <span>Username</span>
          </label>
          {error.username && <span className="error">{error.username}</span>}
        </div>
        <div className="login-field ">
          <label className="password">
            <input
              name="password"
              type="password"
              placeholder=""
              onChange={handleChange}
            />
            <span>Password</span>
          </label>
          {error.password && <span className="error">{error.password}</span>}
        </div>
        <button className="login-btn" onClick={handleLogin}>
          {isLoading ? <BarLoader /> : "LOG IN"}
        </button>
      </div>
    </div>
  );
};

export default Login;
