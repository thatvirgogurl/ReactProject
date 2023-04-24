import {useState} from "react"

export default function RegisterPage() {
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');

 async function resigster(e) {
  e.preventDefault();

   const response= await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if(response.status===200){
      alert('resistrion Succesfull')
    }else{
      alert("resistrion failed");
    }
 
}

  return (
    <div>
      <form className="register" onSubmit={resigster}>
        <h1>Register</h1>
        <input type="text" placeholder="UserName" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button>Register</button>
      </form>
    </div>
  );
}

