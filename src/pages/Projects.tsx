import "./Projects.scss";
// React
import { useState, useEffect } from "react";
// Hooks
import useFilter from "../hooks/useFilter";
import usePagination from "../hooks/usePagination";
// Data
import { projects } from "../data/projectsData";
// Icons
import { ImFilesEmpty } from "react-icons/im";

interface ProjectsProps {
  toggleProjectMode: (idx?: number) => void;
  projectRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface Project {
  name: string;
  about: string;
  website: string;
  images: string[];
  tech: string[];
  repos: {};
  deployed: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ toggleProjectMode, projectRef }) => {
  const [pageContent, setPageContent] = useState<Project[] | null>(null);
  // Hooks
  const { filteredProjects, getAll, getDeployed } = useFilter(projects);
  const { currentPage, totalPages, currentData, nextPage, prevPage, resetPage } = usePagination(filteredProjects, 6);

  useEffect(() => {
    // Set page content
    let projectSlice = currentData();
    setPageContent(projectSlice);
    // Scroll to top
    if(projectRef.current) projectRef.current.scrollIntoView();
  }, [currentPage, filteredProjects]);

  const handleFilter = (mode: "all" | "deployed") => {
    if(mode === "all") {
      getAll();
    } else if(mode === "deployed") {
      getDeployed();
    }
    resetPage();
  };
  
  return (
    <div id="projects">
      <h1><ImFilesEmpty/> Projects</h1>

      <div id="projects-filter">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("deployed")}>Deployed</button>
      </div>

      <ul id="projects-list">
        {pageContent && pageContent.map((project: Project, idx: number) => (
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

      <div id="projects-pagination">
        <button onClick={prevPage}>Prev</button>
        <div>{currentPage}/{totalPages}</div>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Projects;