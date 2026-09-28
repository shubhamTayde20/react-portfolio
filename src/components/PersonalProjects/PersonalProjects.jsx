import "./PersonalProjects.css";

function PersonalProjects() {
  const projects = [
    {
      number: "01",
      title: "MERN E-Commerce",
      description:
        "A full-stack e-commerce application with product management, authentication, shopping cart functionality and MongoDB database integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      github: "#",
      live: "#",
    },
    {
      number: "02",
      title: "Employee Management System",
      description:
        "A full-stack employee management application with authentication, employee CRUD operations, search and filtering functionality.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: "#",
      live: "#",
    },
    {
      number: "03",
      title: "Restaurant Application",
      description:
        "A responsive restaurant application with dynamic data, menu categories, API integration and a mobile-friendly user interface.",
      technologies: [
        "React",
        "JavaScript",
        "REST API",
        "CSS",
      ],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="personal-projects" id="personal-projects">
      <div className="personal-projects-container">

        <div className="personal-projects-heading">
          <p>PERSONAL WORK</p>

          <h2>Projects I Built</h2>

          <span>
            Personal projects created to strengthen my React, Node.js,
            Express and MongoDB development skills.
          </span>
        </div>

        <div className="personal-projects-grid">

          {projects.map((project) => (
            <article
              className="personal-project-card"
              key={project.number}
            >

              <div className="personal-project-number">
                {project.number}
              </div>

              <div className="personal-project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="personal-project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="personal-project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PersonalProjects;