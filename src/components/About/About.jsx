import './About.css'

function About() {
    return (
        <section className='about' id='about'>
            <div className="container">

                <div className="about__layout">

                    <div className="about__intro">
                        <p className='about__number'>01</p>

                        <h2 className='about__title'>
                            About
                            <span> Me.</span>
                        </h2>

                        <div className="about__shape">
                            ✦
                        </div>
                    </div>

                    <div className="about__content">

                        <div className="about__heading">
                            <p className='section-label'>
                                Who am I?
                            </p>

                            <h3>I turn ideas into things you can use</h3>
                        </div>

                        <div className="about__text">
                            <p>
                                I'm Santiago, a web developer with a background in Multimedia Engineering and a focus on building modern web experiences.
                            </p>
                        </div>

                        <div className="about__facts">
                            <div className="about__fact">
                                <span>01</span>
                                <strong>Web Development</strong>
                                <p>Building responsive interfaces and web applications.</p>
                            </div>

                            <div className="about__fact">
                                <span>02</span>
                                <strong>Creative Background</strong>
                                <p>Combining technical and visual thinking.</p>
                            </div>

                            <div className="about__fact">
                                <span>03</span>
                                <strong>Always Learning</strong>
                                <p>Exploring new tools, technologies, and better ways to build.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About