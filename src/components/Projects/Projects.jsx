import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "NFIL International",
      role: "Web Developer",
      description:
        "Worked as part of the frontend development team on the corporate website, contributing to page development, UI implementation, responsive layouts and website updates.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      website: "https://www.nfil.in/",
    },
    {
      number: "02",
      title: "Hindalco",
      role: "Web Developer",
      description:
        "Contributed to the development and revamp of responsive frontend pages for a live corporate website, implementing UI requirements and maintaining production pages.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      website: "https://www.hindalco.com/",
    },
    {
      number: "03",
      title: "Fenesta",
      role: "Web Developer",
      description:
        "Worked on frontend page development and responsive UI implementation as part of the web development team for the live corporate website.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      website: "https://www.fenesta.com/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>PROFESSIONAL WORK</p>

          <h2>Real-World Projects</h2>

          <span>
            Selected production websites I have contributed to as part of
            professional web development teams.
          </span>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <span className="project-role">
                  {project.role}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.website}
                    className="project-live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website
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

export default Projects;