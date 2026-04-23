import React from "react";

function Projects() {
  const projects = [
    {
      name: "DAYBREAK",
      desc: "3D third-person shooter game built using Unity.",
      link: "https://github.com/susmitreddy97-sys/daybreak"
    },
    {
      name: "Online Job Portal",
      desc: "Java-based job platform.",
      link: "https://github.com/susmitreddy97-sys/online-job-portal"
    },
    {
      name: "Reviewer Recommender System",
      desc: "ML system using NLP.",
      link: "https://github.com/susmitreddy97-sys/reviewer-recommender-system"
    }
  ];

  return (
    <div className="container">
      <h1>Projects</h1>

      {projects.map((p, i) => (
        <div className="project-card" key={i}>
          <h2>{p.name}</h2>
          <p>{p.desc}</p>

          <a href={p.link} target="_blank" rel="noreferrer" className="btn">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
