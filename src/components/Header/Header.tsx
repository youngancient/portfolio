import { useEffect, useState } from "react";
import { HeaderStyle, MenuSheet } from "../../styles/Header/style";
import { Logo } from "./Logo";

export const resumeLink: string =
  "https://docs.google.com/document/d/1nmIyuG7qY_eixoK02Hfv302fKqqp00TGYdWJtrqGCH0/edit?usp=sharing";
export const linkedinLink: string = "https://www.linkedin.com/in/jude-tochy-922492227/";
export const xLink: string = "https://twitter.com/judetochyx";
export const githubLink: string = "https://github.com/youngancient";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <HeaderStyle>
      <div className="bar">
        <a href="#top" className="name">
          <Logo />
          Jude Tochy
        </a>
        <nav aria-label="Primary" className="desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume">
            Résumé
          </a>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-sheet"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <MenuSheet id="menu-sheet">
          <nav aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </nav>
        </MenuSheet>
      )}
    </HeaderStyle>
  );
};

export default Header;
