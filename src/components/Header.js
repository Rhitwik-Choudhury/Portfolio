import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
        <div className="main-info">
            <h1>web development and freelancing</h1>
            <ReactTyped 
                className="typed-text"
                strings={["Web Design", "Web Development", "Frontend-Development", "Backend-Development"]} 
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="/" className="btn-main-offer">contact me</a>
        </div>
    </div>
    )
}

export default Header
