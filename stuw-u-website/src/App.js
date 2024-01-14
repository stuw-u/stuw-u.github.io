import './App.css';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <NavigationBar />
        <Content>
          <About />
        </Content>
      <Footer />
    </div>
  );
}

export default App;
