import './Projects.css'
import Weatherapp from './Weatherapp/Weatherapp'
import Wldp from './WebLandingpage/Wldp'
import TodoList from './Todolist/TodoList';
import { useEffect, useRef, useState } from "react";
import '../../App.css'



const Projects = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div id='pj' className={`Projects fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      <div className="Project-title">
        <i>🚀</i>
        <h2 className='title-color'>Projects</h2>
      </div>
      <div className="Project-Wrapper">
        <Weatherapp />
        <TodoList  />
        <Wldp />
      </div>
    </div>
  )
}
export default Projects