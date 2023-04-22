 import { useState } from "react";
 import Logo from "../asssets/img/logo.jpg"
import { Link } from "react-router-dom";
 const userLoggedIn=()=>{
        //api call to checck outhontication
        return true;
 }
 const Title=()=>{
        return (
            <a href="/">
        <img className="logo" alt='logo' src={Logo}></img>
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
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/cart">
                  <li>Cart</li>
                </Link>
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



