import { FooterStyles } from "../../styles/Footer/Footer";
import { NormalText } from "../../styles/Hero/style";
import { Facebook, Instagram, Linkedin, OpenIcon, XIcon } from "../Icons/Icons";

export const Footer = () => {
  return (
    <FooterStyles>
      <h4>Put your last words here. LOL</h4>
      <div className="cont">
        <div className="footer-bar">
          <div className="f-links">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <XIcon />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Linkedin />
            </a>
          </div>
          <div className="logo">
            <div className="desktop-logo">
              <img src="/assets/mobile-logo.png" alt="logo" className="" />
            </div>
          </div>
          <div className="x">
            <div className="other-links">
              <a href="#">
                <NormalText>About Me</NormalText>
              </a>
              <a href="#" className="resume">
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
        <NormalText>@2023. All Rights Reservoir</NormalText>
      </div>
    </FooterStyles>
  );
};