import React from 'react'

export default function LoginPage() {
  return (
    <div>
        <form className='Login'>
            <h1>Login</h1>
           <input type='text' placeholder='UserName'></input>
           <input type='password' placeholder='Password'></input>
           <button>Login</button>
        </form>
    </div>
  )
}
