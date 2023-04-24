import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect]=useState(false)
  
  async function Login(e) {
    e.preventDefault();
     const response = await fetch("http://localhost:4000/login", {
       method: "POST",
       body: JSON.stringify({ username, password }),
       headers: { "Content-Type": "application/json" },
       credentials: "include",
     });
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("wrong creditial");
    }
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
    <div>
      <form className="Login" onSubmit={Login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}
