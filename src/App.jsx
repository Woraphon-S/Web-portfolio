import Navbar from './components/Navbar/Navbar'
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'
import Projects from './components/Project/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import { useState, useEffect } from "react";
import './App.css';


const App = () => {
  const [theme, setTheme] = useState("soft-theme");

  useEffect(() => {
    document.body.classList.remove("dark-theme");
    if (theme === "dark-theme") {
      document.body.classList.add("dark-theme");
    }
  }, [theme]);

  return (
    <div className='ctn'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Aboutme />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>


  )
}
export default App