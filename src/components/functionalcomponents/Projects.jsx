import React from "react";
import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>PROJECTS</h1>
      <div className="projects-container">
        <div className="project-box-top-right">
          <h1 className="project-title">SME resource Access growth</h1>
          <div className="project1">
            <div class="project1-content">
              <p>
                {" "}
                • Proposed a platform to improve resource access and networking
                for small and medium-sized enterprises (SMEs).Connected SMEs
                with funding sources, market opportunities, and training
                resources.
              </p>
              <br></br>

              <p>
                • Designed and built the front end using HTML, CSS, and
                JavaScript for a user-friendly interface.
              </p>
              <br></br>
              <p>
                • Implemented MongoDB for database management, providing a
                scalable and flexible data storage solution.
              </p>
              <button className="btn-project1">To Know More</button>
            </div>
          </div>
        </div>
        <div className="project-box-bottom-left">
          <h1 className="project-title">Plant Disease prediction</h1>
          <div className="project2">
            <div className="project2-content">
              <p>
                • In this plant disease prediction project, I worked as a
                front-end developer responsible for designing and developing the
                user interface.
              </p>
              <br></br>
              <p>
                • Created a visually appealing and user-friendly interface using
                HTML, CSS, and JavaScript, allowing users to input essential
                data such as soil type, temperature, humidity, air quality, and
                crop type.
              </p>
              <br></br>
              <p>
                • Integrate this UI with the machine learning model, which uses
                a CNN to predict plant disease .
              </p>
              <button className="btn-project2">TOnow more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
