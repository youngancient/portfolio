import React, { useEffect, useState } from "react";
import {
  AboutStyles,
  Line,
  SkillStyle,
  SkillcompStyle,
} from "../../styles/About/style";
import { HeadText, NormalText } from "../../styles/Hero/style";
import { ISkill } from "../Icons/skills";
import { Skills } from "./Skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  return (
    <AboutStyles id="about">
      <div className="first">
        <Line className="line1" />
        <HeadText as="h2" className="h1" data-animation="header">
          About Me
        </HeadText>
        <Line className="line2" />
      </div>
      <div className="second">
        <div className="text">
          <p data-animation="paragraph">
            I'm a software engineer with 3+ years of experience building
            products across blockchain and AI. On the blockchain side, I've
            worked on decentralized applications and protocols that put
            transparency and trust at the core of how they work. On the AI
            side, my focus is on designing agentic workflows and systems that put existing AI
            models to work solving real business problems. Beyond the code,
            I'm a problem solver at heart, one who thrives on turning complex,
            ambiguous challenges into practical, working solutions.
          </p>
        </div>
        <div className="picture">
          <img src="/assets/picture.jpg" alt="Jude Tochy" />
        </div>
      </div>
    </AboutStyles>
  );
};

export const SkillsComp = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skee",
        {
          x: -120,
          rotate: 90,
          opacity: 0,
        },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".icons",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <SkillcompStyle id="tools">
      <NormalText className="make" data-animation="header">
        MAKING THE IMPOSSIBILITIES POSSIBLE WITH
      </NormalText>
      <div className="icons">
        {Skills.map((ele, index) => (
          <Skill
            key={index}
            name={ele.name}
            icon={ele.icon}
            color={ele.color}
          />
        ))}
      </div>
    </SkillcompStyle>
  );
};
export const Skill: React.FC<ISkill> = ({ name, icon, color }) => {
  const [showSkill, setShowSkill] = useState(false);
  return (
    <SkillStyle
      className="skee"
      color={color}
      onClick={() => setShowSkill(!showSkill)}
    >
      {icon}
      {showSkill && <p className="">{name}</p>}
    </SkillStyle>
  );
};
