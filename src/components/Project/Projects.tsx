import { HeadText, NormalText } from "../../styles/Hero/style";
import { ProjectStyle, ProjectsStyle } from "../../styles/Project/style";
import { ArrowRight } from "../Icons/Icons";

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
        <NormalText>MY WORKS FROM THE GARDEN OF EDEN</NormalText>
        <HeadText>From the Garden</HeadText>
      </div>
      <div className="project-list">projects</div>
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
          <button type="button">
            <p>Visit Site</p>
            <ArrowRight />
          </button>
        </a>
      </div>
      <div className="second">
        <img src={img} alt={name} />
      </div>
    </ProjectStyle>
  );
};
