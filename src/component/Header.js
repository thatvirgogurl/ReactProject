 import { useState } from "react";

 const userLoggedIn=()=>{
        //api call to checck outhontication
        return true;
 }
 const Title=()=>{
        return (
            <a href="/">
        <img className="logo" alt='logo' src="https://th.bing.com/th/id/OIP.WRUnwFa0F_sBiU8T1SOrAwHaHa?pid=ImgDet&rs=1"></img>
        </a>
        )
}

export const Header=()=>{
        const [isLoggedIn,setIsLoggedIn]=useState(false)
        return (
          <div className="Header">
            <Title />
            <div className="Nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
              </ul>
            </div>
            <div className="auth">
              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
              ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
              )}
            </div>
          </div>
        );
}



