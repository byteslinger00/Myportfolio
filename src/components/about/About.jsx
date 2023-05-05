import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/me.jpg";

import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>8 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>
          <p>
            An accomplished professional with a broad range of skills and
            experience in the field of web Frontend and Backend.
          </p>
          <p>
            I have rich experience working on a variety of web projects,
            including e-commerce sites, web applications, and content management
            systems. My extensive knowledge of front-end technologies such as
            HTML, CSS, Bootstrap, JavaScript, and popular frameworks like React
            and back-end technologies like Node.js, PHP and Python allows me to
            build applications that are efficient, optimized, and esponsive.
          </p>
          <p>Especially, Experienced in Desktop & Web Development with blockchain Development.</p>
          <p>
            My approach to development is rooted in delivering high-quality,
            maintainable code that solves complex problems. Collaboration is key
            to my development philosophy and I am a team player who can work
            seamlessly with cross-functional teams to deliver projects on time
            and within budget.
          </p>
          <p>
            I am seeking a challenging opportunity to leverage my skills and
            experience in a dynamic and collaborative environment to drive
            innovation and create impactful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
