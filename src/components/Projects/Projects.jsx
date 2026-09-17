import './Projects.css'

function Projects() {
    const projects = [
        {
            title: 'Learnify: CourseHub (Frontend)',
            description: 'Pito pito gorgorito',
            technologies: ['React', 'JavaScript', 'CSS'],
            github: '#',
            featured: true,
        },

        {
            title: 'Learnify: CourseHub (Backend)',
            description: 'Pito pito gorgorito',
            technologies: ['PHP', 'SQL', 'Postman'],
            github: '#',
            featured: false,
        },

        {
            title: 'Trickards: Memory Card Game',
            description: 'Pito pito gorgorito',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            featured: false,
        },
    ]

    return (
        <section className='projects' id='projects'>
            <div className="container">
                <div className="projects__header">
                    <div>
                        <p className='projects__number'>03</p>

                        <h2 className='projects__title'>
                            My
                            <span>Projects</span>
                        </h2>
                    </div>

                    <p className='projects__intro'>
                        A selection of projects I've built while developing my skills accross frontend and backend
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`project-card ${project.featured ? 'project-card--featured' : ''
                                }`}
                        >
                            <div className="project-card__visual">
                                <span className='project-card__visual-label'>
                                    Project Preview
                                </span>

                                <span className='project-card__visual-title'>
                                    
                                </span>
                            </div>

                            <div className="project-card__content">

                                <div className="project-card__heading">
                                    <h3>{project.title}</h3>

                                    <span className="project-card__index">
                                        0{projects.indexOf(project) + 1}
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
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        GitHub ↗
                                    </a>

                                    <a href="#" className="project-card__details">
                                        View Details →
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