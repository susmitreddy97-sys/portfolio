import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Susmit Reddy Vanga</h1>

      <img 
        src="https://github.com/susmitreddy97-sys.png" 
        alt="profile"
      />

      <h2>About Me</h2>
      <p>
        AI student at Mahindra University interested in Machine Learning,
        NLP, and Game Development.
      </p>

      <h2>Research Interests</h2>
      <p>Machine Learning, NLP, Computer Vision</p>

      <h2>Personal Details</h2>
      <ul>
        <li>Email: susmitreddy97@gmail.com</li>
        <li>College: Mahindra University</li>
        <li>
          GitHub: 
          <a href="https://github.com/susmitreddy97-sys" target="_blank" rel="noreferrer">
            susmitreddy97-sys
          </a>
        </li>
      </ul>

      <h2>Skills</h2>
      <p>C/C++, Python, JavaScript, HTML/CSS, Git</p>
    </div>
  );
}

export default Home;
