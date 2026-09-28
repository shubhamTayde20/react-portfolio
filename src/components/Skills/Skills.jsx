import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "MySQL", "Power BI", "Figma"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>MY EXPERTISE</p>
          <h2>Skills & Technologies</h2>
          <span>
            Technologies and tools I use to build modern, responsive and
            user-friendly web applications.
          </span>
        </div>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-card-header">
                <span className="skill-number">
                  0{index + 1}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;