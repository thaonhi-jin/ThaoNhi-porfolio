import './App.css';
import Header from './components/home/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Skill from './components/skill/Skill';
import Service from './components/service/Service';
import Project from './components/project/Project';
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Skill/>
      <Service/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
