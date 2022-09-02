import React, {useState} from "react";
import '../Styles/Navbar.css'
import User from "./Users/User";


const NavBar = props => {
    const [isOpen, setIsOpen] = useState(true)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return(
    <>
        { isOpen ? 
            <div id="navbarContainerOpen">
                <div className="navbarToggle">
                    <span className="toggle" onClick={handleToggle}>=</span>
                </div>
                <div className="linksContainer">
                    <div className="links">Link</div>
                    <div className="links">Link2</div>
                    <div className="links">Link3</div>
                    <div className="links">Link4</div>
                </div>
                <User />
            </div>
            :
            <div id="navbarContainerClosed">
                <div className="navbarToggle">
                    <span className="toggle" onClick={handleToggle}>=</span>
                </div>
                <div className="linksContainer">
                    <span role='img' aria-label="link">🔗</span>
                    <span role='img' aria-label="link">🔗</span>
                    <span role='img' aria-label="link">🔗</span>
                    <span role='img' aria-label="link">🔗</span>
                </div>
                <User />
            </div>
        }
        
    </>
    )
}

export default NavBar