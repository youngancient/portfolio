import React, { useState } from "react";
import {
  AboutStyles,
  Line,
  SkillStyle,
  SkillcompStyle,
} from "../../styles/About/style";
import { HeadText, NormalText } from "../../styles/Hero/style";
import { ISkill } from "../Icons/skills";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <AboutStyles id="about">
      <div className="first">
        <Line className="line1" />
        <HeadText>About Me</HeadText>
        <Line className="line2" />
      </div>
      <div className="second">
        <div className="text">
          <p>
            As a fervent front-end developer, I embark on a journey into
            front-end excellence, leveraging over 2 years of hands-on experience
            to weave compelling stories with code. My passion lies in crafting
            visually stunning websites and dynamic web applications that
            seamlessly blend aesthetics with functionality. With a steadfast
            commitment to web performance and accessibility, I advocate for
            digital experiences that captivate and delight users. Armed with a
            coding toolbox featuring JavaScript, TypeScript, HTML, and CSS, I
            specialize in frameworks like React.js, Next.js, and Node to bring
            these stories to life. Beyond the code editor, I am not merely a
            developer; I am a storyteller who solves problems, tinkers with
            code, and thrives in hackathons, using the power of code to
            contribute positively to the ever-evolving narrative of web
            development. "I tell stories with code," where each line of code is
            a chapter in the tale of seamless, user-centric digital experiences.
          </p>
        </div>
        <div className="picture">
          <img src="/assets/picture.png" alt="Jude Tochy" />
        </div>
      </div>
    </AboutStyles>
  );
};

export const SkillsComp = () => {
  return (
    <SkillcompStyle id="tools">
      <NormalText className="make">
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
    <SkillStyle color={color} onClick={() => setShowSkill(!showSkill)}>
      {icon}
      {showSkill && <p className="">{name}</p>}
    </SkillStyle>
  );
};
