import { HeadText, NormalText } from "../../styles/Hero/style";
import { ProjectStyle, ProjectsStyle } from "../../styles/Project/style";
import { ArrowRight } from "../Icons/Icons";
import { ProjectList } from "./data";

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
        <NormalText>MY WORKS</NormalText>
        <HeadText>From the Kitchen</HeadText>
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
  return (
    <ProjectStyle>
      <div className="first">
        <div className="one">
          <h3>{name}</h3>
          <p>Role: {role}</p>
          <span>{shortDesc}</span>
        </div>
        <a href={href}>
          <button type="button" className="btn">
            <p>Visit Site</p>
            <ArrowRight />
          </button>
        </a>
      </div>
      <a href={href}>
        <div className="second">
          <img src={img} alt={name} />
        </div>
      </a>
    </ProjectStyle>
  );
};
