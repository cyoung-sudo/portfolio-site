import "./Project.scss";
// React
import { useState, useEffect } from "react";
// Image gallery
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
// Data
import { projects } from "../data/projectsData";
// Bootstrap
import Badge from 'react-bootstrap/Badge';
// Icons
import { FaArrowLeft } from "react-icons/fa6";

interface ProjectProps {
  projectIdx: number;
  toggleProjectMode: (idx?: number) => void;
}

const Project: React.FC<ProjectProps> = ({ projectIdx, toggleProjectMode }) => {
  const project = projects[projectIdx];
  const [images, setImages] = useState<Readonly<ReactImageGalleryItem[]> | null>(null);

  // Extract images from project
  useEffect(() => {
    let extractImages = projects[projectIdx].images.map(url => {
      return { original: url };
    });

    setImages(extractImages);
  }, []);

  return (
    <div id="project">
      <div id="project-header">
        <button onClick={() => toggleProjectMode()}>
          <span><FaArrowLeft/></span> Back to Projects
        </button>
        <h1>{project.name}</h1>
        {project.deployed && <Badge bg="success">Deployed</Badge>}
        {!project.deployed && <Badge bg="danger">Not Deployed</Badge>}
      </div>

      <div id="project-content">
        <div id="project-images">
          {images &&
            <ImageGallery 
              items={ images }
              showFullscreenButton={ false }
              showPlayButton={ false }/>
          }
        </div>
        <div id="project-info">
          <div><b>About: </b> {project.about}</div>
          {project.deployed && project.website &&
            <div><b>Website: </b><a href={project.website}>{project.website}</a></div>
          }
          <div id="project-tech"><b>Tech: </b>
            {project.tech.map((el, idx) => (
              <Badge key={idx}>{el}</Badge>
            ))}
          </div>
          {project.repos.client &&
            <div><b>Client Repo: </b><a href={project.repos.client} target="_blank">{project.repos.client}</a></div>
          }
          {project.repos.server &&
            <div><b>Server Repo: </b><a href={project.repos.server} target="_blank">{project.repos.server}</a></div>
          }
        </div>
      </div>
    </div>
  );
};

export default Project;