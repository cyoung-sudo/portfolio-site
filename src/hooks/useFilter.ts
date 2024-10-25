// React
import { useState } from "react";

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

const useFilter = (projects: Project[]) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const getAll = () => {
    setFilteredProjects(projects);
  }

  const getDeployed = () => {
    let deployedProjects = projects.filter(project => project.deployed);
    setFilteredProjects(deployedProjects);
  }  

  return {
    filteredProjects,
    getAll,
    getDeployed
  };
};

export default useFilter;