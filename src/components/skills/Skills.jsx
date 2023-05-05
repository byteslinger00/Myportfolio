import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h5>A Few Technologies I Have</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>HTML/HTML5</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>CSS/CSS3</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Tailwindcss</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>JavaScript(ES6+)</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Next.js</h4>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Back-end Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Laravel</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Solidity/Rust</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
