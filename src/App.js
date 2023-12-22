  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css';
  import { Footer } from './components/Footer/Footer';
  import { Header } from './components/Header/Header';
  import { About } from "./components/About/About";
  import { WorkExperience } from "./components/WorkExperience/WorkExperience";
  import { Skills } from "./components/Skills/Skills";
  import { Project } from "./components/Projects/Project";
  import { Education } from './components/Education/Education';
  import { Achivement } from './components/Achivement/Achivement';
  import { Contact } from './components/Contact/Contact';

  function App() {
    return (
      <>
        <Router>
          <div style={{backgroundImage: `url(${require('./backG.jpg')})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight:"100vh"}}>
            <Header />
            <div>
            {/* <div className='content'> */}
              <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/work" element={<WorkExperience/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/projects" element={<Project/>} />
                <Route path="/education" element={<Education/>} />
                <Route path="/achivement" element={<Achivement/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            {/* </div> */}
            </div>
            {/* <Footer /> */}
          </div>
        </Router>
      </>
    );
  }

  export default App;