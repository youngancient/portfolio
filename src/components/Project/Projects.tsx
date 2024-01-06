import { useEffect } from "react";
import { HeadText, NormalText } from "../../styles/Hero/style";
import { ProjectStyle, ProjectsStyle } from "../../styles/Project/style";
import { ArrowRight } from "../Icons/Icons";
import { ProjectList } from "./data";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IO } from "../../animations/observe";
gsap.registerPlugin(ScrollTrigger);

export interface IProject {
  name: string;
  role: string;
  shortDesc: string;
  href: string;
  img: string;
}
export const Projects = () => {
  return (
    <ProjectsStyle>
      <div className="head">
        <NormalText data-animation="header">MY WORKS</NormalText>
        <HeadText data-animation="header">From the Kitchen</HeadText>
      </div>
      <div className="project-list">
        {ProjectList.map((ele, index) => (
          <Project
            key={index}
            name={ele.name}
            href={ele.href}
            img={ele.img}
            role={ele.role}
            shortDesc={ele.shortDesc}
          />
        ))}
      </div>
    </ProjectsStyle>
  );
};

export const Project: React.FC<IProject> = ({
  name,
  role,
  shortDesc,
  href,
  img,
}) => {
  useEffect(() => {
    const cont = document.querySelectorAll(".pj");
    console.log(cont);
    cont.forEach((item) => {
      // set image initial
      gsap.set(item.querySelectorAll(".second img"), {
        // rotateZ: "-90deg",
        y: 100,
        opacity: 0,
      });

      gsap.set(item, { scale: 0.9, opacity: 0 });
      // gsap.set(item.querySelectorAll(".btn button"), { x: -100, opacity: 0 });
      // set chars initial
      const line = new SplitType(item.querySelectorAll(".name"), {
        types: "chars",
      });
      gsap.set(line.chars, { y: 120, opacity: 0 });

      const line2 = new SplitType(item.querySelectorAll(".text-anime"), {
        types: "lines",
      });
      gsap.set(line2.lines, { y: 120, opacity: 0 });

      IO(item, { threshold: 0.8 }).then(() => {
        gsap.to(item, {
          y: 0,
          scale: 1,
          duration: 0.5,
          opacity: 1,
        });
        // gsap.set(item.querySelectorAll(".btn button"), { x: 0, opacity: 1,duration: 0.6, });

        gsap.to(line.chars, {
          y: 0,
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(line2.lines, {
          y: 0,
          duration: 0.5,
          opacity: 1,
        });

        const img = item.querySelectorAll(".second img");
        gsap.to(img, {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          opacity: 1,
          // scrollTrigger: {
          //   start: "top center",
          //   trigger: cont,
          // },
        });
      });
    });
  }, []); // The missing closing parenthesis for the useEffect dependency array.

  return (
    <ProjectStyle className="pj">
      <div className="first">
        <div className="one">
          <h3 className="name">{name}</h3>
          <p className="text-anime">Role: {role}</p>
          <span className="text-anime">{shortDesc}</span>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn">
            <p>Visit Site</p>
            <ArrowRight />
          </button>
        </a>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="second">
          <img src={img} alt={name} data-animation="img" />
        </div>
      </a>
    </ProjectStyle>
  );
};
