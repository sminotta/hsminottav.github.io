import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiArrowUpRight } from 'react-icons/fi'

import './Contact.css'

function Contact() {
    const contactLinks = [
        {
            name: 'GitHub',
            description: 'Check out my code and projects.',
            href: 'https://github.com/sminotta',
            icon: <FaGithub />,
            className: 'contact__link--github',
        },
        {
            name: 'LinkedIn',
            description: 'Connect with me professionally.',
            href: 'https://www.linkedin.com/in/hsminottav/',
            icon: <FaLinkedinIn />,
            className: 'contact__link--linkedin',
        },
        {
            name: 'Email',
            description: 'Send me a message directly.',
            href: 'sminotta.dev@outlook.com',
            icon: <MdEmail />,
            className: 'contact__link--email',
        },
    ]

    return (
        <section className="contact" id="contact">
            <div className="container">

                <div className="contact__box">

                    <div className="contact__header">
                        <p className="contact__number">
                            04
                        </p>

                        <h2 className="contact__title">
                            My Contact
                            <span>Info</span>
                        </h2>

                        <p className="contact__description">
                            Want to say hello? Get in touch!
                        </p>
                    </div>

                    <div className="contact__links">
                        {contactLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`contact__link`}
                                target={link.name !== 'Email' ? '_blank' : undefined}
                                rel={link.name !== 'Email' ? 'noreferrer' : undefined}
                            >
                                <div className="contact__link-icon">
                                    {link.icon}
                                </div>

                                <div className="contact__link-content">
                                    <h3>{link.name}</h3>
                                    <p>{link.description}</p>
                                </div>

                                <FiArrowUpRight className="contact__link-arrow" />
                            </a>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact