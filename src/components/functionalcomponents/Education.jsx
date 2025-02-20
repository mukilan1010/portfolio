import React from "react";
import "../css/Education.css";
import StJoseph from "../pictures/stjoseph.avif";
import school from "../pictures/school.jpg";

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="quote">
        "Education is not the learning of facts, but the training of the mind to
        think."
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img draggable="false" src={StJoseph} alt="College" />
          </div>
          <div className="content">
            <h3>Bachelor of Engineering in Computer Science and Engineering</h3>
            <p>St. Joseph's Institute of Technology | Chennai</p>
            <h4>2022-2026 | Pursuing</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={school} alt="School" />
          </div>
          <div className="content">
            <h3>HSC Science | Bio-Maths</h3>
            <p>Dr. Natarajan Matric Hr Sec School | Nemili</p>
            <h4>2020-2022 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
