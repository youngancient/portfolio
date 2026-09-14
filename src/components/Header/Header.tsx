import { HeaderStyle } from "../../styles/Header/style";
import {
  HeaderGithubIcon,
  Linkedin,
  OpenIcon,
  XIcon,
} from "../Icons/Icons";

export const resumeLink: string = "https://docs.google.com/document/d/1nmIyuG7qY_eixoK02Hfv302fKqqp00TGYdWJtrqGCH0/edit?usp=sharing";
export const linkedinLink: string = "https://www.linkedin.com/in/jude-tochy-922492227/";
export const xLink: string = "https://twitter.com/judetochyx";
export const githubLink: string = "https://github.com/youngancient";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="for-desktop">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <HeaderGithubIcon />
        </a>
        <a href={xLink} target="_blank" rel="noopener noreferrer">
          <XIcon />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </div>
      <div className="logo">
        <div className="desktop-logo">
          <img src="/assets/logo.png" alt="YoungAncient logo" className="" />
        </div>
        <div className="mobile-logo">
          <img src="/assets/mobile-logo.png" alt="YoungAncient logo" className="" />
        </div>
      </div>
      <div className="other-links">
        <a href="#about">
          <p>About Me</p>
        </a>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume">
          <p>Resume</p> <OpenIcon />
        </a>
      </div>
    </HeaderStyle>
  );
};

export default Header;
