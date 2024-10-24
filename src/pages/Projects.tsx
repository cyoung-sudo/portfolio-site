import "./Projects.scss";
// Data
import { projects } from "../data/projectsData";
// Icons
import { ImFilesEmpty } from "react-icons/im";

const Projects = () => {
  return (
    <div id="projects">
      <h1><ImFilesEmpty/> Projects</h1>
      <ul id="projects-list">
        {projects.map((project, idx) => (
          <li key={idx}>
            <button className="projects-list-image">
              <img src={project.images[0]}/>
            </button>
            <button className="projects-list-name">{project.name}</button>
            <div className="projects-list-about">{project.about}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;