import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-image">
            <div className="about-image-box">
              ST
            </div>
          </div>

          <div className="about-text">
            <h3>Web Developer focused on building modern web experiences.</h3>

            <p>
              I am a Web Developer with 2+ years of experience working on
              responsive and user-friendly websites. I enjoy transforming
              designs and ideas into clean, functional web experiences.
            </p>

            <p>
              I currently work with technologies such as HTML, CSS,
              JavaScript, React and modern frontend tools. I am also
              developing my skills in the MERN stack to build complete
              full-stack applications.
            </p>

            <div className="about-info">
              <div>
                <span>Experience</span>
                <strong>2+ Years</strong>
              </div>

              <div>
                <span>Specialization</span>
                <strong>Web Development</strong>
              </div>

              <div>
                <span>Based In</span>
                <strong>Maharashtra, India</strong>
              </div>
            </div>

            <a href="#contact" className="about-button">
              Let's Work Together
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;