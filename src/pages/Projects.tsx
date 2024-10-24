import "./Projects.scss";
// Data
import { projects } from "../data/projectsData";
// Icons
import { ImFilesEmpty } from "react-icons/im";

const Projects = ({ toggleProjectMode }) => {
  return (
    <div id="projects">
      <h1><ImFilesEmpty/> Projects</h1>
      <ul id="projects-list">
        {projects.map((project, idx) => (
          <li key={idx}>
            <button 
              className="projects-list-image"
              onClick={() => toggleProjectMode(idx)}>
              <img src={project.images[0]}/>
            </button>
            <button 
              className="projects-list-name"
              onClick={() => toggleProjectMode(idx)}>
              {project.name}
            </button>
            <div className="projects-list-about">{project.about}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;