import './Skills.css'

function Skills() {

    const skills = [
        {
            name: 'HTML',
            category: 'Frontend',
            description: 'Semantic and accessible page structure',
            className: 'skills__item--primary',
        },

        {
            name: 'CSS',
            category: 'Frontend',
            description: 'Responsive layouts and visual design',
            className: 'skills__item--secondary',
        },

        {
            name: 'JavaScript',
            category: 'Frontend',
            description: 'Interactive and dynamic web experiences',
            className: 'skills__item--accent',
        },

        {
            name: 'React',
            category: 'Frontend',
            description: 'Component-based interfaces and applications',
            className: '',
        },

        {
            name: 'SQL',
            category: 'Database',
            description: 'Working with relational databases',
            className: '',
        },

        {
            name: 'PHP',
            category: 'Backend',
            description: 'Python web development',
            className: 'skills__item--accent',
        },

        {
            name: 'Git',
            category: 'Tools',
            description: 'Version control and collaborative development',
            className: 'skills__item--secondary',
        },
    ]

    return (
        <section className='skills' id='skills'>
            <div className="container">
                <div className="skills__header">
                    <div>
                        <p className='skills__number'>02</p>

                        <h2 className='skills__title'>
                            My
                            <span> Skills</span>
                        </h2>
                    </div>

                    <p className='skills__intro'>
                        Technologies and tools I use to build, style and connect web apps
                    </p>
                </div>

                <div className="skills__grid">
                    {skills.map((skill) => (
                        <article
                            key={skills.name}
                            className={`skills__item ${skill.className}`}
                        >
                            <div className="skills__item-top">
                                <span>{skill.category}</span>
                                
                            </div>

                            <h3>{skill.name}</h3>

                            <p>{skill.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills