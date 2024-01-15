import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectOuterblast from './pages/ProjectOuterblast';
import ProjectOutrPVE from './pages/ProjectOutrPVE';
import ProjectMonkey from './pages/ProjectMonkey';
import ProjectKart from './pages/ProjectKart';
import ProjectNeovni from './pages/ProjectNeovni';
import ProjectAquatic from './pages/ProjectAquatic';
import ProjectShoalArcade from './pages/ProjectShoalArcade';
import ProjectHarold from './pages/ProjectHarold';

export default function App() {
  return (
    <>
      <NavigationBar />
        <Content>
          <BrowserRouter>
            <Routes>
              <Route index element={<About />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/projects/pve' element={<ProjectOutrPVE />} />
              <Route path='/projects/outerblast' element={<ProjectOuterblast />} />
              <Route path='/projects/monkey' element={<ProjectMonkey />} />
              <Route path='/projects/harold' element={<ProjectHarold />} />
              <Route path='/projects/kart' element={<ProjectKart />} />
              <Route path='/projects/neovni' element={<ProjectNeovni />} />
              <Route path='/projects/aquatic' element={<ProjectAquatic />} />
              <Route path='/projects/shoalarcade' element={<ProjectShoalArcade />} />
            </Routes>
          </BrowserRouter>
        </Content>
      <Footer />
    </>
  );
}
