import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "test" && password === "test") {
      localStorage.setItem("isAuthenticated", true);
      navigate("/dashboard");
    } else {
      alert ("Please verify the credentials")
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="formInput">
        <label>User Name : 
        <input type="text" className="userInput" onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>Password :
        <input type="password" className="userInput" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" className="button" value="Login" />
      </form>
    </div>
  );
}
