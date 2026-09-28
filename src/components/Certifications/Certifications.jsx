import "./Certifications.css";

function Certifications() {
  const certifications = [

    {
      number: "01",
      title: "MERN Stack Development",
      issuer: "Edureka",
      year: "Ongoing",
      description:
        "Learning full-stack web development using MongoDB, Express.js, React.js and Node.js.",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      number: "02",
      title: "Web Development",
      issuer: "Professional Experience",
      year: "2024",
      description:
        "Hands-on experience developing responsive websites and implementing modern frontend technologies.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">

        <div className="certifications-heading">
          <p>MY LEARNING</p>

          <h2>Certifications</h2>

          <span>
            Certifications and learning experiences that have helped me
            strengthen my technical skills.
          </span>
        </div>

        <div className="certifications-grid">

          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.number}
            >

              <div className="certification-top">
                <span className="certification-number">
                  {certification.number}
                </span>

                <span className="certification-year">
                  {certification.year}
                </span>
              </div>

              <div className="certification-content">

                <h3>{certification.title}</h3>

                <h4>{certification.issuer}</h4>

                <p>{certification.description}</p>

                <div className="certification-skills">
                  {certification.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;