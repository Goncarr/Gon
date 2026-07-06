import { useEffect, useState } from 'react'
import './NavBar.css'

export default function NavBar({currentSona,sonaUpdate}){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropMenu,setDropMenu] = useState(false);

    const handleThemeChange = (themeName) => {
        sonaUpdate(themeName);
        setDropMenu(false);
    };

    return (
        <>
                <nav>
                    <div className="header-container">
                        <div className="dropdown">
                            <button className="dropbtn" onClick={() => setDropMenu(!dropMenu)}>
                                <img/>
                                <p>{currentSona}</p>
                            </button>
                            {dropMenu &&(
                                <div className="dropdown-content">
                                    <p onClick={(e) => handleThemeChange('banshee')}>
                                        <img src="sonas/banshee.png" alt="Banshee" />
                                        Banshee
                                    </p>
                                    <p onClick={(e) => handleThemeChange('gon')}>
                                        <img src="sonas/gon.jpg" alt="Gon" />
                                        Gon
                                    </p>
                                </div>
                                )
                            }
                        </div>

                        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        </button>

                        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                            <li><a href='#about' onClick={() => setMobileMenuOpen(false)}>ABOUT</a></li>
                            <li><a href='#art' onClick={() => setMobileMenuOpen(false)}>ART</a></li>
                            <li><a href='#socials' onClick={() => setMobileMenuOpen(false)}>SOCIALS</a></li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}