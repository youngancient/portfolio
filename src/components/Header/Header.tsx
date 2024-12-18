import { HeaderStyle } from "../../styles/Header/style";
import {
  HeaderGithubIcon,
  Instagram,
  Linkedin,
  OpenIcon,
  XIcon,
} from "../Icons/Icons";

export const resumeLink:string = "https://drive.google.com/file/d/1zPUOCtp97gA95JPXwuKK8duOndUqeytH/view?usp=sharing";
export const linkedinLink:string = "https://www.linkedin.com/in/jude-tochy-922492227/";
export const xLink:string = "https://twitter.com/judetochyx";
export const githubLink:string = "https://github.com/youngancient";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="for-desktop">
        <a href={githubLink} target="_blank">
          {/* change this to github icons */}
          <HeaderGithubIcon />
        </a>
        <a href={xLink} target="_blank">
          <XIcon />
        </a>
        <a href="#" target="_blank">
          <Instagram />
        </a>
        <a href={linkedinLink} target="_blank">
          <Linkedin />
        </a>
      </div>
      <div className="logo">
        <div className="desktop-logo">
          <img src="/assets/logo.png" alt="desktop-logo" className="" />
        </div>
        <div className="mobile-logo">
          <img src="/assets/mobile-logo.png" alt="mobile-logo" className="" />
        </div>
      </div>
      <div className="other-links">
        <a href="#about">
          <p>About Me</p>
        </a>
        <a href={resumeLink} target="_blank" className="resume">
          <p>Resume</p> <OpenIcon />
        </a>
      </div>
    </HeaderStyle>
  );
};

export default Header;
