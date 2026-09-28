import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <p>MY JOURNEY</p>
          <h2>Work Experience</h2>
          <span>
            My professional experience and the work I have been involved in.
          </span>
        </div>

        <div className="experience-timeline">

          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <h3>Junior Web Developer</h3>
                  <h4>Information Technology Company</h4>
                </div>

                <span className="experience-date">
                  2024 — Present
                </span>
              </div>

              <p className="experience-description">
                Working on responsive and user-friendly websites for
                corporate clients. Responsible for developing new pages,
                implementing UI changes, website revamps and maintaining
                existing web applications.
              </p>

              <div className="experience-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Bootstrap</span>
                <span>jQuery</span>
              </div>

            </div>
          </div>


          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              <div className="experience-top">
                <div>
                  <h3>Web Developer Intern</h3>
                  <h4>Information Technology Company</h4>
                </div>

                <span className="experience-date">
                  2024
                </span>
              </div>

              <p className="experience-description">
                Worked on website development and UI implementation while
                gaining practical experience with frontend technologies,
                responsive design and real-world client projects.
              </p>

              <div className="experience-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>jQuery</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;