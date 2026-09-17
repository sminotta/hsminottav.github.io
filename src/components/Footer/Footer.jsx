import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'

import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">

                <a href="#home" className="footer__logo">
                    Santiago.
                </a>

                <div className="footer__links">
                    <a href="https://github.com/sminotta" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/hsminottav" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>

                    <a href="#home" aria-label="Back to top">
                        <FiArrowUp />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer