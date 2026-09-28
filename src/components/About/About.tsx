import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AboutStyles, SkillStyle, SkillcompStyle } from "../../styles/About/style";
import { MathText, Section, SectionTitle, TextLink } from "../../styles/shared";
import { ISkill } from "../Icons/skills";
import { resumeLink } from "../Header/Header";
import { Skills } from "./Skills";

const steps = [
  { title: "Map the process", body: "Find where the hours actually go, and what a good result looks like." },
  { title: "Model it", body: "Break it into steps a system can do, and decide where a person stays in the loop." },
  { title: "Build and ship", body: "Put a working version in front of real users early." },
  { title: "Measure and iterate", body: "Track cost, quality and failures, then tighten what the numbers point to." },
];

export const About = () => {
  return (
    <Section id="about" aria-labelledby="about-title">
      <AboutStyles className="inner">
        <figure className="portrait">
          <img src="/assets/picture.jpg" alt="Jude Tochy" />
          <figcaption>
            <MathText>Fig. 2.</MathText> Jude Tochy, Lagos.
          </figcaption>
        </figure>

        <div className="text">
          <SectionTitle id="about-title">About</SectionTitle>
          <p>
            I studied mathematics and graduated with First Class honours. It taught me to take a
            messy problem apart into pieces I can reason about, and that's how I build software.
          </p>
          <p>
            For more than three years I've shipped across three fields: blockchain protocols and
            tooling, AI agents that do real operational work, and production web apps, including
            dashboards used by 500+ teams and an application tracker with 70+ users.
          </p>
          <p>
            I'm looking for teams and businesses that want to grow output without growing
            headcount at the same rate, and who want the systems that do it to be reliable.
          </p>

          <h3>How I work</h3>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="num">{i + 1}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="facts">
            <dt>Degree</dt>
            <dd>BSc Mathematics, First Class, University of Lagos, 2025</dd>
            <dt>Focus</dt>
            <dd>AI automation, blockchain, web products</dd>
          </dl>

          <p className="cv">
            Full work history is in my{" "}
            <TextLink href={resumeLink} target="_blank" rel="noopener noreferrer">
              résumé
            </TextLink>
            .
          </p>
        </div>
      </AboutStyles>
    </Section>
  );
};

export const SkillsComp = () => {
  const iconsRef = useRef<HTMLDivElement>(null);

  // Plays once when the grid actually enters the viewport. An IntersectionObserver
  // doesn't depend on precomputed scroll positions, so layout shifts above
  // (fonts loading, project rows opening) can't make it miss.
  useEffect(() => {
    const el = iconsRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const icons = el.querySelectorAll(".skee svg");
    gsap.set(icons, { x: -60, rotate: 90, opacity: 0 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(icons, {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      gsap.killTweensOf(icons);
      gsap.set(icons, { clearProps: "all" });
    };
  }, []);
  return (
    <Section id="tools" aria-labelledby="tools-title">
      <SkillcompStyle className="inner">
        <h2 id="tools-title" className="make">
          Making the impossible possible with
        </h2>
        <div className="icons" ref={iconsRef}>
          {Skills.map((ele) => (
            <Skill key={ele.name} name={ele.name} icon={ele.icon} color={ele.color} />
          ))}
        </div>
      </SkillcompStyle>
    </Section>
  );
};

export const Skill: React.FC<ISkill> = ({ name, icon, color }) => {
  const [showSkill, setShowSkill] = useState(false);
  return (
    <SkillStyle
      type="button"
      className="skee"
      color={color}
      aria-label={name}
      aria-expanded={showSkill}
      onClick={() => setShowSkill(!showSkill)}
    >
      {icon}
      {showSkill && <span className="label">{name}</span>}
    </SkillStyle>
  );
};
