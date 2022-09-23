import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
import User from "./Users/User";


const NavBar = props => {
    return( 
        <div id="navbarContainer">
            <div className="navbarToggle">
                <span className="toggle">=</span>
            </div>
            <div className="linksContainer">
                <Link className="links" to={"/"}>Home</Link>
                <Link className="links" to={"/projects"}>Projects</Link>
            </div>
            <User />
        </div>
    )
}

export default NavBar