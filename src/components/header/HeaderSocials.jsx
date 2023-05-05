import React from "react";
import { FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/PapoyDev"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://t.me/miraclePapoy"
        target="_blank"
        rel="noreferrer"
      >
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
  );
};

export default HeaderSocials;
