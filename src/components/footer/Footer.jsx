import React from "react";
import { FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer id="contact">
      <a href="#contact" className="footer__logo">
        Contact Me
      </a>
      <h4>
        I do receive your messages and will respond asap if the valid email is
        provided
      </h4>
      <div className="footer__socials">
        <a
          href="https://github.com/PapoyDev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://t.me/brooksMiracle" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a
          href="https://discordapp.com/users/1099883890119802901"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; A.B.M {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
