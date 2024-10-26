import "./Projects.scss";
// React
import { useState, useEffect } from "react";
// Hooks
import useFilter from "../hooks/useFilter";
import usePagination from "../hooks/usePagination";
// Data
import { projects } from "../data/projectsData";
// Bootstrap
import Badge from 'react-bootstrap/Badge';
// Icons
import { ImFilesEmpty } from "react-icons/im";
// Styling Libraries
import { LinearGradient } from 'react-text-gradients'

interface ProjectsProps {
  toggleProjectMode: (idx?: number) => void;
  projectRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface Project {
  id: number;
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
  }, [currentPage, filteredProjects]);

  const handleFilter = (mode: "all" | "deployed") => {
    if(mode === "all") {
      getAll();
    } else if(mode === "deployed") {
      getDeployed();
    }
    resetPage();
    // Scroll to projects-segment
    if(projectRef.current) projectRef.current.scrollIntoView();
  };

  const handlePage = (dir: "prev" | "next") => {
    if(dir === "prev") {
      prevPage();
    } else if(dir === "next") {
      nextPage();
    }
    // Scroll to projects-segment
    if(projectRef.current) projectRef.current.scrollIntoView();
  }
  
  return (
    <div id="projects">
      <div id="projects-header">
        <h1>
          <LinearGradient gradient={['to left', 'darkcyan ,black']}>
            <span><ImFilesEmpty/></span>Projects
          </LinearGradient>
        </h1>
        <p>Frontend & Full-Stack projects I've completed in my programming journey</p>
      </div>

      <div id="projects-filter">
        <button onClick={() => handleFilter("all")}>
          <span>All</span>
        </button>
        <button onClick={() => handleFilter("deployed")}>
          <span>Deployed</span>
        </button>
      </div>

      <ul id="projects-list">
        {pageContent && pageContent.map((project: Project, idx: number) => (
          <li key={idx}>
            <button 
              className="projects-list-image"
              onClick={() => toggleProjectMode(project.id)}>
              <img src={project.images[0]}/>
            </button>
            <button 
              className="projects-list-name"
              onClick={() => toggleProjectMode(project.id)}>
              {project.name}
            </button>
            {project.deployed && <Badge bg="success">Deployed</Badge>}
            {!project.deployed && <Badge bg="danger">Not Deployed</Badge>}
            <div className="projects-list-about">{project.about}</div>
          </li>
        ))}
      </ul>

      <div id="projects-pagination">
        <button onClick={() => handlePage("prev")}>
          <span>Prev</span>
        </button>
        <div>
          <span>{currentPage}/{totalPages}</span>
        </div>
        <button onClick={() => handlePage("next")}>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;