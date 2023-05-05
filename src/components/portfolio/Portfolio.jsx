import React from "react";
import IMG1 from "../../assets/img1.PNG";
import IMG2 from "../../assets/img2.PNG";
import IMG3 from "../../assets/img3.PNG";
import IMG4 from "../../assets/img4.PNG";
import IMG5 from "../../assets/img5.PNG";
import IMG6 from "../../assets/img6.PNG";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "WARBY PARKER",
      img: IMG1,
      description:
        "EShop App that allows users to buy and book their favorite glasses online.",
      technologies: "MERN | Redux | Next | Three.js | AWS",
      link: "https://www.warbyparker.com//",
    },
    {
      id: 2,
      title: "The Online Coding School",
      img: IMG2,
      description:
        "Online course app to support students—especially those marginalized by gender, race, and/or age—to learn in-demand tech skills and land higher paying and more fulfilling jobs.",
      technologies: "PHP | WordPress | Tailwind CSS | JQuery",
      link: "https://skillcrush.com/",
    },
    {
      id: 3,
      title: "Cake Deliver App",
      img: IMG3,
      description: "Online Delivery App to deliver the baking gourmet cakes to customers' doors for birthday parties, office parties and holiday parties.",
      technologies: "PHP | CodeIgniter | Bootstrap | JQuery",
      link: "https://www.pieceofcakeinc.com/",
    },
    {
      id: 4,
      title: "Shelter",
      img: IMG4,
      description:
        "AskforTask for connecting people looking for help around the house with highly reviewed and verified local Taskers.",
      technologies: "React | Laravel | Nginx L Google Maps",
      link: "https://www.askfortask.com/",
    },
    {
      id: 5,
      title: "Red Devil NFT",
      img: IMG5,
      description:
        "NFT mint contract Frontend by Next,Tailwind, Material UI Designed MySelf.",
      technologies: "Algorithms | Framer Motion | Tailwind CSS | TypeScript",
      link: "https://www.reddevils.site/",
    },
    {
      id: 6,
      title: "Degen Taxi",
      img: IMG6,
      description:
        "Developed Frontend, Backend and smartContract project, including the design. and implementation of the smart contract and blockchain technology. Here i share with you YPredict - v1 for the private sale.",
      technologies: "Token | Smart contract | Blockchain | Next.js | Node, Express ",
      link: "https://degentaxi.io/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.github === undefined ? (
                <></>
              ) : (
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
