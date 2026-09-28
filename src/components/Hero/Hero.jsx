import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-intro">
            Hi, I'm Shubham Tayde
          </p>

          <h1>
            Web Developer
            <span>Building Modern Web Experiences.</span>
          </h1>

          <p className="hero-description">
            Web Developer with 2+ years of professional experience in
            developing responsive websites and frontend interfaces.
            Currently expanding my expertise in React.js and MERN stack
            development.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="hero-primary-button">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-secondary-button">
              Let's Talk
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/shubhamTayde20"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-tayde-20/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="mailto:shubhamtayde20@gmail.com"
              aria-label="Email"
            >
              Email
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-card">

            <div className="hero-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-code">

              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className="code-green">
                  "Shubham Tayde"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className="code-green">
                  "Web Developer"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;experience:{" "}
                <span className="code-blue">
                  "2+ years"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;stack: [
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-green">
                  "React"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-green">
                  "Node.js"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-green">
                  "MongoDB"
                </span>
              </p>

              <p>
                &nbsp;&nbsp;]
              </p>

              <p>{"};"}</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;