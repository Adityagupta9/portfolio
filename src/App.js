import './App.css';
import Project from './components/Project';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import End from './components/End';
function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <End/>
    </div>
  );
}

export default App;
