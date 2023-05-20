import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import { useState } from 'react';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current)
    }

    return (
        <header className="header">
          <div className="header-container">
          <Link to="/"><img src={Logo} alt="logo" /></Link>

            <div className="header-content">
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><a href="#">Home</a></Link>
                        </li>
                        <li>
                            <Link to="/AllProjects/"><a href="#">Portfolio</a></Link>
                        </li>
                    </ul>
                </nav>
                <div 
                    id="menu"
                    className={isActive ? 'open' : ""}
                    onClick={handleClick}
                >
                        <div className="line"></div>
                </div>
                {isActive && (
                    <div className="menu-text">
                    <ul>
                        <li>
                            <Link to="/"><a href="#">Home</a></Link>
                        </li>
                        <li>
                        <Link to="/AllProjects/"><a href="#">Portfolio</a></Link>
                        </li>
                    </ul>
                </div>    
                )}
            </div>
          </div>
        </header>    
    )
}

export default Header;