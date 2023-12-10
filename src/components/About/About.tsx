import React, { useState } from "react";
import { AboutStyles, Line, SkillStyle, SkillcompStyle } from "../../styles/About/style";
import { HeadText, NormalText } from "../../styles/Hero/style";
import { ISkill } from "../Icons/skills";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <AboutStyles>
      <div className="first">
        <Line className="line1" />
        <HeadText>About Me</HeadText>
        <Line className="line2" />
      </div>
      <div className="second">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum magna nulla enim
            fringilla. Quam nulla cras pulvinar lectus elementum id odio. Lacus
            dapibus amet a vehicula tellus. In consectetur mattis congue diam
            amet aliquam.Lorem ipsum dolor sit amet consectetur. Elementum magna
            nulla enim fringilla. Quam nulla cras pulvinar lectus elementum id
            odio. Lacus dapibus amet a vehicula tellus. In consectetur mattis
            congue diam amet aliquam.Lorem ipsum dolor sit amet consectetur.
            Elementum magna nulla enim fringilla. Quam nulla cras pulvinar
            lectus elementum id odio. Lacus dapibus amet a vehicula tellus. In
            consectetur mattis congue diam amet aliquam.Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
        <div className="picture">
          <img src="/assets/picture.png" alt="Jude Tochy" />
        </div>
      </div>
      
    </AboutStyles>
  );
};

export const SkillsComp =()=>{
    return(
        <SkillcompStyle>
            <NormalText className="make">MAKING THE IMPOSSIBILITIES POSSIBLE WITH</NormalText>
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
    )
}
export const Skill: React.FC<ISkill> = ({ name, icon, color }) => {
    const [showSkill, setShowSkill] = useState(false);
  return (
    <SkillStyle color={color} onClick={() => setShowSkill(!showSkill)}>
      {icon}
      {showSkill && <p className="">{name}</p>}
    </SkillStyle>
  );
};
