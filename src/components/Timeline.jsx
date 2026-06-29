const timelineItems = [
  {
    year: "2026",
    title: "MERN Stack Developer",
    description:
      "Built responsive web applications using React, JavaScript, Node.js, Express, and MongoDB while continuously enhancing my full-stack development skills through personal projects.",
  },
  {
    year: "2025",
    title: "Frontend Development Intern",
    description:
      "Completed a 3-month internship at Cloud1 Web Solutions, where I developed responsive websites using HTML, CSS, JavaScript, and WordPress, customized themes, and optimized website performance.",
  },
  {
    year: "2024",
    title: "Started My Web Development Journey",
    description:
      "Learned the fundamentals of web development, including HTML, CSS, JavaScript, Git.",
  },
];

import React from "react";

const Timeline = () => {
  return (
    <section className="section alt" id="timeline">
      <div className="container">
        <h2 className="section-title">Journey</h2>
        <p className="section-subtitle">
          From learning the fundamentals to building real-world projects that solve practical problems.
        </p>

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              key={item.year}
            >
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
