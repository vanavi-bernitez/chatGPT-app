import React, { useState, useEffect } from "react";
import {
  usePostLoginMutation,
  usePostSignupMutation,
} from "../../state/api.js";

const Login = ({ setUser, setSecret }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resultLogin] = usePostLoginMutation();
  const [triggerSignup] = usePostSignupMutation();

  const handleRegisterChange = () => {
    setIsRegister(!isRegister);
  };

  const handleRegister = () => {
    triggerSignup({ username, password });
  };

  const handleLogin = () => {
    triggerLogin({ username, password });
    console.log(username, password);
  };

  //todo: useeffect

  useEffect(() => {
    if (resultLogin.data?.response) {
      setUser(username);
      setSecret(password);
    }
  }, [resultLogin.data]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">Title</h2>
        <p className="register-change" onClick={handleRegisterChange}>
          {isRegister ? "Already a user?" : "Are you a new user?"}
        </p>

        <div>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="login-actions">
          {isRegister ? (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { Login };
