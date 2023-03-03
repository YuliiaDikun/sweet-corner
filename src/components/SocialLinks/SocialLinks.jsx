import React from "react";
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";
import { SocialLinksWrapper } from "./SocialLinks.styled";
const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <a
        href="https://www.linkedin.com/in/yuliia-dikun/"
        target="_blank"
        rel="noreferrer"
      >
        <ImLinkedin size={35} />
      </a>
      <a href="https://github.com/YuliiaDikun" target="_blank" rel="noreferrer">
        <ImGithub size={35} />
      </a>
      <a
        href="https://twitter.com/Midnight_Jul"
        target="_blank"
        rel="noreferrer"
      >
        <ImTwitter size={35} />
      </a>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
