/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdComputer } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Full Stack Developer | Blockchain @ Solidity @ Web3",
      companyName: "TrustToken (Apr 2022 - Dec 2022)",
      summary:
        "Developed decentralized token with Solidity, Web3 and Front-End based on React, Next, Typescript.  Collaborated closely with cross-functional teams, including designers, product managers, and QA analysts, to deliver high-quality software applications. Managed a team of junior developers and provided mentorship to help them grow their skills.",
    },
    {
      id: 2,
      role: "Blockchain Developer",
      companyName: "Citizen (Jun 2021 - Feb 2022)",
      summary:
        "Have developed Ethereum Energy contract and Frontend-with react, web3, ether.js. Developed Smart Contract with solidity and Defi. Introduce the embedded signature wallet on existing system.",
    },
    {
      id: 3,
      role: "Python Software Developer",
      companyName: "ITechArt Group (Jan 2020 - Apr 2021)",
      summary:
        "Implemented a taxonomy types for risk control. Improved access control system. Developed features related with risks and risk controls. Data migrations and data model transformation. Cover logic changes and migrations with tests.",
    },
    {
      id: 4,
      role: "Web Developer",
      companyName: "StoryMKRS (Sep 2018 - Nov 2019)",
      summary:
        "Developed CMS and E-commerce platforms with PHP and JavaScript. Developed an ecommerce analytics application using React, Laravel, and MySQL. Facilitated maintenance and development of different projects. Participated in cross-functional team discussions to formulate effective development and maintenance strategies throughout all systems.",
    },
  ];
  return (
    <section id="experience">
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <Swiper
        className="container experiences__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {experiences.map((experience) => (
          <SwiperSlide className="experience" key={experience.id}>
            <div className="company__avatar">
              <a>
                <MdComputer />
              </a>
            </div>
            <h5 className="role">{experience.role}</h5>
            <h5 className="company__name">{experience.companyName}</h5>
            <small className="summary">{experience.summary}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Experience;
