import React, { useState } from "react";
import { useLoginMutation } from "../redux/api/auth";

const Login = () => {
  const [login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function attemptAuth(e) {
    e.preventDefault();
    // setError(null);

    const authMethod = login;
    const credentials = { username, password };

    try {
      await authMethod(credentials).unwrap();
      navigate("/");
    } catch (error) {
      // setError(error.data);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={attemptAuth}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
