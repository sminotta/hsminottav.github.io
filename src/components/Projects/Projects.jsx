import './Projects.css'

function Projects() {
    const projects = [
        {
            title: 'Learnify: CourseHub (Frontend)',
            description: 'A React-based course platform interface featuring authentication, course browsing, course details, shopping cart functionality, and local storage.',
            technologies: ['React', 'JavaScript', 'CSS'],
            image: '../../../public/images/projects/learnify_front.png',
            github: 'https://github.com/sminotta/learnify-coursehub-app',
            featured: true,
        },

        {
            title: 'Learnify: CourseHub (Backend)',
            description: 'A PHP-based backend for the Learnify platform leveraging relational databases (SQL) to manage courses, users, and interactions, with RESTful endpoints tested via Postman to ensure reliable request handling, data validation, and structured client-server communication.',
            technologies: ['PHP', 'SQL', 'Postman'],
            image: '../../../public/images/projects/learnify_logo.jpg',
            github: 'https://github.com/sminotta/learnify-coursehub-server',
            featured: false,
        },

        {
            title: 'Trickards: Memory Card Game',
            description: 'An interactive browser-based memory game built with HTML, CSS, and JavaScript, incorporating deceptive elements such as false cards designed to mislead player recall, alongside dynamic state management, attempt tracking, and responsive UI feedback to enhance difficulty and replayability.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: '../../../public/images/projects/image.png',
            github: 'https://github.com/DiegoEstrada07/js-mini-app-1',
            featured: false,
        },
    ]

    return (
        <section className="projects" id="projects">
            <div className="container">

                <div className="projects__header">
                    <div>
                        <p className="projects__number">03</p>

                        <h2 className="projects__title">
                            My
                            <span> Projects</span>
                        </h2>
                    </div>

                    <p className="projects__intro">
                        A selection of projects I've built while
                        developing my skills across frontend and backend.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`project-card ${project.featured ? 'project-card--featured' : ''
                                }`}
                        >

                            <div className="project-card__visual">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                />
                            </div>

                            <div className="project-card__content">

                                <div className="project-card__heading">
                                    <h3>{project.title}</h3>

                                    <span className="project-card__index">
                                        0{index + 1}
                                    </span>
                                </div>

                                <p className="project-card__description">
                                    {project.description}
                                </p>

                                <div className="project-card__technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-card__actions">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>

                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects