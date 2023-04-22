import React from 'react'

export default function RegisterPage() {
  return (
    <div>
      <form className="register">
        <h1>Register</h1>
        <input type="text" placeholder="UserName"></input>
        <input type="password" placeholder="Password"></input>
        <button>Register</button>
      </form>
    </div>
  );
}
