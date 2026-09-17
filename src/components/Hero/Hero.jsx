import './Hero.css'

function Hero() {
    return (
        <section className='hero' id='home'>
            <div className="container hero__container">
                <div className="hero__content">
                    <p className='hero__eyebrow'>
                        Hey, I'm Santiago!
                    </p>

                    <h1 className='hero__title'>
                        Web
                        <span> Developer</span>
                    </h1>

                    <div className="hero__actions">
                        <a href="#projects" className='hero__button hero__button--primary'>
                            View Projects
                        </a>

                        <a href="#contact" className='hero__button'>
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero__visual">

                    <div className="hero__image">
                        <span className='hero__symbol'>✺</span>
                    </div>

                    {/* <div className="hero__code-card">
                        <span></span>
                        <p>Building for the web</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero