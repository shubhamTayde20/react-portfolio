import { useEffect, useRef } from "react";
import "./Hero.css";

const codeLines = [
  { indent: 0, content: <><span className="code-purple">const</span> developer = <span className="code-pink">{"{"}</span></> },
  { indent: 1, content: <>name: <span className="code-green">"Shubham Tayde"</span>,</> },
  { indent: 1, content: <>role: <span className="code-green">"Frontend Developer"</span>,</> },
  { indent: 1, content: <>experience: <span className="code-blue">"2+ years"</span>,</> },
  { indent: 1, content: <>stack: <span className="code-pink">[</span><span className="code-green">"React"</span>, <span className="code-green">"JavaScript"</span>, <span className="code-green">"CSS"</span><span className="code-pink">]</span>,</> },
  { indent: 1, content: <>superpower: <span className="code-green">"Figma → React"</span>,</> },
  { indent: 1, content: <>learning: <span className="code-green">"MERN stack"</span>,</> },
  { indent: 1, content: <>openTo: <span className="code-pink">[</span><span className="code-green">"Full-time"</span>, <span className="code-green">"Freelance"</span><span className="code-pink">]</span></> },
  { indent: 0, content: <><span className="code-pink">{"}"}</span>;<span className="hero-caret" aria-hidden="true" /></> },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.querySelectorAll("[data-hero-reveal]").forEach((item, index) => {
      item.animate(
        [
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 650,
          delay: 100 + index * 110,
          easing: "cubic-bezier(.2,.7,.2,1)",
          fill: "both",
        }
      );
    });
  }, []);

  return (
    <section className="hero hero--creative" id="home" ref={heroRef}>
      <div className="hero-grid-glow" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro" data-hero-reveal>
            <span className="hero-status-dot" />
            HELLO, I'M SHUBHAM TAYDE
          </p>

          <h1 data-hero-reveal>
            I turn designs into{" "}
            <span className="hero-title-accent">pixel-perfect</span>{" "}
            React interfaces<span className="hero-title-period">.</span>
          </h1>

          <p className="hero-description" data-hero-reveal>
            Frontend developer with 2+ years of experience building
            responsive, production-ready websites from Figma designs with
            React, JavaScript and modern CSS.
          </p>

          <div className="hero-buttons" data-hero-reveal>
            <a href="#projects" className="hero-primary-button">
              View my projects <span aria-hidden="true">↗</span>
            </a>

            {/* Put your resume PDF in /public with this exact name */}
            <a
              href="/Shubham-Tayde-Resume.pdf"
              className="hero-secondary-button"
              download
            >
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-socials" data-hero-reveal>
            <a href="https://github.com/shubhamTayde20" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/shubham-tayde-20/" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:shubhamtayde20@gmail.com">
              shubhamtayde20@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" data-hero-reveal>
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

          <div className="hero-float-tag hero-float-tag--top" aria-hidden="true">
            <span>✳</span> Pixel-perfect UI
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <div className="hero-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span className="hero-file-label">
                <span className="hero-file-icon">JS</span>
                developer.js
              </span>

              <span className="hero-live-label">
                <i /> LIVE
              </span>
            </div>

            <div className="hero-code" aria-label="Developer profile written as a JavaScript object">
              <div className="hero-code-gutter" aria-hidden="true">
                {codeLines.map((_, index) => (
                  <span key={index}>{String(index + 1).padStart(2, "0")}</span>
                ))}
              </div>

              <div className="hero-code-lines">
                {codeLines.map((line, index) => (
                  <div className="hero-code-line" key={index} data-indent={line.indent}>
                    {line.content}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card-bottom">
              <span>
                <i /> Available for opportunities
              </span>
              <span>Pune · India</span>
            </div>
          </div>

          <div className="hero-float-tag hero-float-tag--bottom" aria-hidden="true">
            <span>↗</span> Built with curiosity
          </div>
        </div>
      </div>

      <a className="hero-scroll-cue" href="#about">
        <span className="hero-scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}