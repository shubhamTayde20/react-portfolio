import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-container">

          <div className="contact-heading">
            <p>GET IN TOUCH</p>
            <h2>Let's Work Together</h2>
            <span>
              Have a project, opportunity or just want to connect?
              Feel free to reach out.
            </span>
          </div>

          <div className="contact-content">

            <div className="contact-info">

              <div className="contact-item">
                <div className="contact-icon">✉</div>

                <div>
                  <span>Email</span>
                  <a href="mailto:shubhamtayde95@gmail.com">
                    shubhamtayde95@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">in</div>

                <div>
                  <span>LinkedIn</span>
                  <a
                    href="www.linkedin.com/in/shubham-tayde-b685ab23a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">GH</div>

                <div>
                  <span>GitHub</span>
                  <a
                    href="https://github.com/shubhamTayde20"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>

                <div>
                  <span>Location</span>
                  <strong>Maharashtra, India</strong>
                </div>
              </div>

            </div>


            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Name</label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="contact-button">
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </div>
      </section>


      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">
            Shubham<span>.</span>
          </div>

          <p>
            Building modern and responsive web experiences.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Shubham Tayde. All rights reserved.
            </span>
          </div>

        </div>

      </footer>
    </>
  );
}

export default Contact;