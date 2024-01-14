import './App.css';
import NavigationBar from "./components/NavigationBar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import About from './pages/About';
import Projects from './pages/Projects';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
            </Routes>
          </BrowserRouter>
        </Content>
      <Footer />
    </>
  );
}
