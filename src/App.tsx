import './App.scss';
// React
import { useState, useRef } from "react";
// Pages
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Info from './pages/Info';
// Components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  // Project segment mode
  const [showProject, setShowProject] = useState(false);
  // Idx of project to show
  const [projectIdx, setProjectIdx] = useState(0);
  // Hooks
  const projectRef = useRef<HTMLDivElement | null>(null);

  // Switch segment between projects & project
  const toggleProjectMode = (idx?: number) => {
    if(idx) setProjectIdx(idx);
    setShowProject(!showProject);
    // Scroll to top
    if(projectRef.current) projectRef.current.scrollIntoView();
  }
  
  return (
    <div id="app">
      <div id="app-content">
        <NavigationBar/>

        <div className="app-segment">
          <Profile/>
        </div>

        <div className="app-segment" ref={projectRef}>
          {!showProject && 
            <Projects 
              toggleProjectMode={toggleProjectMode}
              projectRef={projectRef}/>
          }
          {showProject && 
            <Project 
              projectIdx={projectIdx}
              toggleProjectMode={toggleProjectMode}/>
          }
        </div>

        <div className="app-segment">
          <Info/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
