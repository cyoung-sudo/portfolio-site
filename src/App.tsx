import './App.scss';
// Pages
import Profile from './pages/Profile';
// Components
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
      <div id="app-content">
        <NavigationBar/>

        <div className="app-segment">
          <Profile/>
        </div>

        <div id="projects" className="app-segment">
          Projects
        </div>

        <div id="contact" className="app-segment">
          Contact
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
