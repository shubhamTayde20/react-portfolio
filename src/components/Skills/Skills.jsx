
import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "jQuery",
      ],
    },
    {
      title: "UI & Libraries",
      skills: [
        "Bootstrap",
        "Tailwind CSS",
        "React-Bootstrap",
        "Ant Design",
        "GSAP",
        "Swiper",
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST API",
        "MySQL",
      ],
    },
    {
      title: "Tools & AI",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Cursor",
        "MongoDB Atlas",
        "Postman",
        "Figma",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>MY EXPERTISE</p>

          <h2>Skills & Technologies</h2>

          <span>
            Technologies, frameworks and development tools I use to build
            modern, responsive and user-friendly web applications.
          </span>
        </div>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-card-header">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-tag"
                    key={skillIndex}
                  >
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

