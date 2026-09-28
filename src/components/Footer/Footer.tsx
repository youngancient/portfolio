import { FooterStyles } from "../../styles/Footer/Footer";
import { githubLink, linkedinLink, xLink } from "../Header/Header";

export const Footer = () => {
  return (
    <FooterStyles>
      <div className="inner">
        <ul className="social">
          <li>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={xLink} target="_blank" rel="noopener noreferrer">
              X
            </a>
          </li>
          <li>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} Jude Tochy</p>
        <a href="#top" className="top">
          Back to top
        </a>
        <span className="qed" aria-hidden="true">
          ∎
        </span>
      </div>
    </FooterStyles>
  );
};
