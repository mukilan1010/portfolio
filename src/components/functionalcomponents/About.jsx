import React from "react";
import "../css/About.css";
import profilePic from "../pictures/hero.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-image">
        <img
          src={profilePic}
          alt="Mukilan Profile"
          className="profile-vertical"
        />
      </div>
      <div className="about-content">
        <p className="about-description">
          <h1 className="about-title">About Me</h1>I am Mukilan, a passionate
          Frontend Developer with experience in building user-friendly and
          interactive web applications. I have expertise in HTML, CSS,
          JavaScript, React, and backend technologies like FastAPI and MongoDB.
          My projects focus on real-world problem-solving with scalable
          solutions.
          <br></br>
          Im very much intersted in solving problems etc...
          <p>
            Email : mukilan291024@gmail.com
            <br></br>
            Place : Chennai, India - 600019
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
