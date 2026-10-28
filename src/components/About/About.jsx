import React, { useCallback, useEffect, useRef, useState } from "react";
import "./About.css";

/* ---------- physics tuning ---------- */
const STRAP_LENGTH = 110; // resting length of the lanyard (px)
const MAX_STRAP = STRAP_LENGTH * 2.3; // how far the lanyard can stretch
const SPRING_X = 0.035; // sideways pull back (lower = lazier swing)
const SPRING_Y = 0.09; // vertical pull back (higher = snappier)
const DAMPING = 0.93; // velocity kept each frame (closer to 1 = longer swing)
const MAX_VELOCITY = 40;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const About = () => {
  const stageRef = useRef(null);
  const strapRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const reducedMotion = useRef(false);

  const [dragging, setDragging] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // Mutable physics state (kept in a ref so pointer moves never re-render React)
  const phys = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    grabX: 0,
    grabY: 0,
    dragging: false,
    lastTime: 0,
  });

  /* Draw the strap + card from the current physics state */
  const render = useCallback(() => {
    const strap = strapRef.current;
    const card = cardRef.current;
    if (!strap || !card) return;

    const p = phys.current;
    const dx = p.x;
    const dy = STRAP_LENGTH + p.y;
    const length = Math.max(30, Math.hypot(dx, dy));
    const angle = (Math.atan2(dx, dy) * 180) / Math.PI;

    // Card lags behind its motion a little, and tilts in 3D with speed
    const lag = clamp(p.vx * 0.5, -10, 10);
    const tiltY = clamp(p.vx * 1.3, -28, 28);
    const tiltX = clamp(-p.vy * 0.9, -20, 20);

    strap.style.height = `${length + 6}px`;
    strap.style.transform = `rotate(${-angle}deg)`;

    card.style.transform = `
      translate3d(${p.x}px, ${p.y}px, 0)
      rotate(${-angle + lag}deg)
      rotateY(${tiltY}deg)
      rotateX(${tiltX}deg)
    `;
  }, []);

  /* Animation loop: spring back to rest when released */
  const step = useCallback(
    (time) => {
      const p = phys.current;
      const dt = p.lastTime ? time - p.lastTime : 16.67;
      p.lastTime = time;
      const f = Math.min(dt / 16.67, 2); // frame-rate independent

      if (p.dragging) {
        // let tilt relax when the pointer stops moving
        p.vx *= Math.pow(0.82, f);
        p.vy *= Math.pow(0.82, f);
      } else {
        p.vx += -p.x * SPRING_X * f;
        p.vy += -p.y * SPRING_Y * f;
        p.vx *= Math.pow(DAMPING, f);
        p.vy *= Math.pow(DAMPING, f);
        p.x += p.vx * f;
        p.y += p.vy * f;

        const settled =
          Math.abs(p.x) < 0.05 &&
          Math.abs(p.y) < 0.05 &&
          Math.abs(p.vx) < 0.05 &&
          Math.abs(p.vy) < 0.05;

        if (settled) {
          p.x = p.y = p.vx = p.vy = 0;
          p.lastTime = 0;
          render();
          rafRef.current = null;
          return;
        }
      }

      render();
      rafRef.current = requestAnimationFrame(step);
    },
    [render]
  );

  const startLoop = useCallback(() => {
    if (rafRef.current) return;
    phys.current.lastTime = 0;
    rafRef.current = requestAnimationFrame(step);
  }, [step]);

  const kick = useCallback(
    (vx, vy = 0) => {
      if (reducedMotion.current) return;
      phys.current.vx += vx;
      phys.current.vy += vy;
      startLoop();
    },
    [startLoop]
  );

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    render();
    // gentle entrance swing
    const t = setTimeout(() => kick(9), 400);

    return () => {
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [render, kick]);

  /* ---------- pointer handlers ---------- */
  const handlePointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (e.target.closest("button")) return;

    const p = phys.current;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);

    p.grabX = e.clientX - p.x;
    p.grabY = e.clientY - p.y;
    p.vx = 0;
    p.vy = 0;
    p.dragging = true;

    setDragging(true);
    startLoop();
  };

  const handlePointerMove = (e) => {
    const p = phys.current;
    const stage = stageRef.current;
    if (!p.dragging || !stage) return;

    const { width, height } = stage.getBoundingClientRect();

    let nx = clamp(e.clientX - p.grabX, -width / 2 + 30, width / 2 - 30);
    let ny = clamp(
      e.clientY - p.grabY,
      -STRAP_LENGTH + 20,
      height - STRAP_LENGTH - 220
    );

    // a lanyard only stretches so far
    const dy = STRAP_LENGTH + ny;
    const length = Math.hypot(nx, dy);
    if (length > MAX_STRAP) {
      const scale = MAX_STRAP / length;
      nx *= scale;
      ny = dy * scale - STRAP_LENGTH;
    }

    p.vx = clamp(p.vx * 0.5 + (nx - p.x) * 0.5, -MAX_VELOCITY, MAX_VELOCITY);
    p.vy = clamp(p.vy * 0.5 + (ny - p.y) * 0.5, -MAX_VELOCITY, MAX_VELOCITY);
    p.x = nx;
    p.y = ny;
  };

  const handlePointerUp = () => {
    const p = phys.current;
    if (!p.dragging) return;
    p.dragging = false;
    setDragging(false);

    if (reducedMotion.current) {
      p.x = p.y = p.vx = p.vy = 0;
      render();
    } else {
      startLoop(); // throw velocity carries into the swing
    }
  };

  const handleKeyDown = (e) => {
    const map = {
      ArrowLeft: [-10, 0],
      ArrowRight: [10, 0],
      ArrowUp: [0, -10],
      ArrowDown: [0, 10],
    };
    if (map[e.key]) {
      e.preventDefault();
      kick(...map[e.key]);
    } else if (e.key === "Enter") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  const toggleFlip = () => {
    setFlipped((f) => !f);
    kick(flipped ? -6 : 6);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">GET TO KNOW ME</span>
          <h2>About Me</h2>
          <p>A little introduction to the developer behind the code.</p>
        </div>

        <div className="about-layout">
          <div className="about-card-column">
            <div
              className="about-id-stage"
              ref={stageRef}
              style={{ "--strap-length": `${STRAP_LENGTH}px` }}
            >
              {/* Lanyard */}
              <div className="lanyard-strap" ref={strapRef} aria-hidden="true">
                <span>
                  SHUBHAM.DEV • SHUBHAM.DEV • SHUBHAM.DEV • SHUBHAM.DEV •
                  SHUBHAM.DEV • SHUBHAM.DEV •
                </span>
              </div>

              {/* Card */}
              <div
                ref={cardRef}
                className={`id-card ${dragging ? "is-dragging" : ""} ${
                  flipped ? "is-flipped" : ""
                }`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onLostPointerCapture={handlePointerUp}
                onDoubleClick={toggleFlip}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="group"
                aria-label="Draggable developer ID card. Use arrow keys to swing it and Enter to flip it."
              >
                <div className="id-clip" aria-hidden="true" />

                <div className="id-card-inner">
                  {/* FRONT */}
                  <div className="id-face id-front">
                    <div className="id-sheet">
                      <svg
                        className="id-waves"
                        viewBox="0 0 100 140"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 0 H13 C5 30 21 60 9 92 C3 110 7 126 16 140 H0 Z"
                          className="wave-fill"
                        />
                        <path
                          d="M16 0 C8 30 24 60 12 92 C6 110 10 126 19 140"
                          className="wave-line"
                        />
                        <path
                          d="M19 0 C11 30 27 60 15 92 C9 110 13 126 22 140"
                          className="wave-line"
                        />
                        <path
                          d="M100 120 C82 127 62 136 44 140 H100 Z"
                          className="wave-fill"
                        />
                        <path
                          d="M100 116 C82 123 62 132 40 140"
                          className="wave-line"
                        />
                      </svg>

                      <div className="id-content">
                        <div className="id-logo">
                          <span>ST</span>
                        </div>
                        <div className="id-brand-name">
                          SHUBHAM<b>.DEV</b>
                        </div>

                        <div className="id-avatar">
                          {/* Swap for <img src={yourPhoto} alt="Shubham Tayde" /> */}
                          <span>ST</span>
                        </div>

                        <h3 className="id-name">SHUBHAM TAYDE</h3>
                        <p className="id-role">Web Developer</p>

                        <dl className="id-information">
                          <div>
                            <dt>ID</dt>
                            <dd>WEB-2026</dd>
                          </div>
                          <div>
                            <dt>Field</dt>
                            <dd>Frontend Development</dd>
                          </div>
                          <div>
                            <dt>Stack</dt>
                            <dd>React · JavaScript</dd>
                          </div>
                          <div>
                            <dt>Location</dt>
                            <dd>India</dd>
                          </div>
                        </dl>

                        <div className="id-barcode" aria-hidden="true" />
                        <span className="id-barcode-text">WEB-2026-ST</span>
                      </div>

                      <div className="id-card-shine" />
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="id-face id-back">
                    <div className="id-sheet">
                      <svg
                        className="id-waves"
                        viewBox="0 0 100 140"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 0 H100 V24 C70 36 30 36 0 24 Z"
                          className="wave-fill"
                        />
                        <path d="M0 28 C30 40 70 40 100 28" className="wave-line" />
                        <path
                          d="M0 140 V124 C30 114 70 114 100 124 V140 Z"
                          className="wave-fill"
                        />
                      </svg>

                      <div className="id-content id-back-content">
                        <div className="id-logo">
                          <span>ST</span>
                        </div>
                        <div className="id-brand-name">
                          SHUBHAM<b>.DEV</b>
                        </div>

                        <ul className="id-back-list">
                          <li>Turns Figma designs into responsive, production-ready pages.</li>
                          <li>Builds with React, JavaScript, Bootstrap &amp; modern tools.</li>
                          <li>Currently levelling up across the full MERN stack.</li>
                        </ul>

                        <span className="id-status">
                          <i /> AVAILABLE TO CONNECT
                        </span>

                        <div className="id-signature">
                          <span>Signature</span>
                          <strong>Shubham Tayde</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="drag-hint">Drag, throw or double-click the card</p>

            <div className="id-actions">
              <button className="id-action-button" onClick={toggleFlip} type="button">
                {flipped ? "Show front" : "Flip card"} ⟲
              </button>
              <button
                className="id-action-button"
                onClick={() => kick(Math.random() > 0.5 ? 16 : -16)}
                type="button"
              >
                Swing it ↔
              </button>
            </div>
          </div>

          <div className="about-content">
            <span className="about-content-label">THE DEVELOPER</span>

            <h3>
              Turning designs into
              <span> meaningful web experiences.</span>
            </h3>

            <p>
              I'm Shubham Tayde, a Web Developer with 2+ years of professional
              experience building responsive websites and user-friendly
              frontend interfaces.
            </p>

            <p>
              My work includes translating Figma designs into functional web
              pages, implementing UI improvements, and contributing to
              production websites. I work with HTML, CSS, JavaScript, React,
              Bootstrap, and modern frontend tools.
            </p>

            <p>
              I'm also expanding my skills in the MERN stack, focusing on
              building interactive interfaces and developing complete web
              applications.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <strong>02+</strong>
                <span>Years of experience</span>
              </div>
              <div className="about-stat">
                <strong>React</strong>
                <span>Frontend focus</span>
              </div>
              <div className="about-stat">
                <strong>MERN</strong>
                <span>Growing skill set</span>
              </div>
            </div>

            <a className="about-cta" href="#contact">
              Let's work together <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;