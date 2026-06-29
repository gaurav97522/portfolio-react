import React from 'react'

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            MERN Stack Developer with a strong foundation in React, JavaScript, Node. I enjoy learning new technologies and building applications that deliver a great user experience.
          </p>

          <div className="about-grid">
            <div className="about-card primary">
              <div className="card-icon">🚀</div>
              <h3>Who I Am</h3>
              <p>
                I&apos;m a MERN stack developer specialising in React,
                Node.js, and modern JavaScript tooling. I love turning complex
                ideas into simple, usable interfaces.
              </p>
              
            </div>

            <div className="about-card secondary">
              <div className="card-icon">⚡</div>
              <h3>What I Do</h3>
              <ul className="feature-list">
                <li>
                  <span className="bullet">▹</span>
                  Design & build full-stack web apps (MERN / Node.js)
                </li>
                <li>
                  <span className="bullet">▹</span>
                  Design and develop responsive websites with a focus on performance and accessibility
                </li>
                <li>
                  <span className="bullet">▹</span>
                  Design and develop responsive websites with a focus on performance and accessibility
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
