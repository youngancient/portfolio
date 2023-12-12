import { HeaderStyle } from "../../styles/Header/style";
import {
  Facebook,
  Instagram,
  Linkedin,
  OpenIcon,
  XIcon,
} from "../Icons/Icons";

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="for-desktop">
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
          <img src="/assets/logo.png" alt="logo" className="" />
        </div>
        <div className="mobile-logo">
          <img src="/assets/mobile-logo.png" alt="logo" className="" />
        </div>
      </div>
      <div className="other-links">
        <a href="#">
          <p>About Me</p>
        </a>
        <a href="#" className="resume">
          <p>Resume</p> <OpenIcon />
        </a>
      </div>
    </HeaderStyle>
  );
};

export default Header;
