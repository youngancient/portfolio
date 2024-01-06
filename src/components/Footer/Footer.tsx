import { FooterStyles } from "../../styles/Footer/Footer";
import { NormalText } from "../../styles/Hero/style";
import { githubLink, linkedinLink, resumeLink, xLink } from "../Header/Header";
import { DarkInsta, DarkLinkedin, DarkX, FooterGithubIcon, OpenIcon} from "../Icons/Icons";

export const Footer = () => {
  return (
    <FooterStyles>
      <h4 data-animation='header'>Craft Your Dreams into Reality!</h4>
      <div className="cont">
        <div className="footer-bar">
          <div className="f-links">
            <a href={githubLink} target="_blank">
              <FooterGithubIcon />
            </a>
            <a href={xLink} target="_blank">
              <DarkX />
            </a>
            <a href="#" target="_blank">
              <DarkInsta />
            </a>
            <a href={linkedinLink} target="_blank">
              <DarkLinkedin />
            </a>
          </div>
          <div className="logo">
            <div className="desktop-logo">
              <img src="/assets/mobile-logo.png" alt="logo" className="" />
            </div>
          </div>
          <div className="x">
            <div className="other-links">
              <a href="#about">
                <NormalText>About Me</NormalText>
              </a>
              <a href={resumeLink} target="_blank" className="resume">
                <NormalText>Resume</NormalText>
                <OpenIcon />
              </a>
            </div>

            <div className="mobile-logo">
              <img src="/assets/mobile-logo.png" alt="logo" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyryt">
        <NormalText>@2023. All Rights Reserved</NormalText>
      </div>
    </FooterStyles>
  );
};
