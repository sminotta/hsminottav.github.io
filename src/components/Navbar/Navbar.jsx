import { useState } from "react"
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return(
        <header className="navbar">
            <div className="container navbar__container">

                <a href="#" className="navbar__logo">
                    [SM...]
                </a>

                <button
                    className="navbar__toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    className={`navbar__menu ${
                        isMenuOpen ? 'navbar__menu--open' : ''
                    }`}
                >
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar