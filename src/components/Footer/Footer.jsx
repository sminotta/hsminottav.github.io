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
                    <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>

                    <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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