import './TodoList.css'
import todolist_image from '../../../assets/ProjectImage/todolistimage.png'
import { FaEye } from "react-icons/fa"

const TodoList = () => {
    return (
        <section className="TodoList-box box-shadow">
            <div className="TodoList-title">
                <h2>📋TodoList</h2>
                <div className="Livedemo-box">
                    <a href="https://worraphon-todolist.netlify.app/" target="_blank" ><i><FaEye /></i><p>Live Demo</p></a>
                </div>
            </div>
            <div className="TodoList-contents">
                <p>
                    A simple and intuitive task management app built with HTML, CSS, JavaScript, and React.
                    Users can easily add, edit, and delete tasks to stay organized and boost productivity.
                    The UI is clean and interactive, a modern design that makes task tracking enjoyable.
                </p>
                <div className="SeeMore">
                    <a href="https://github.com/Woraphon-S/TodoListApp" target='_blank'>GitHub</a>
                </div>

                <div className='project-image'>
                    <img src={todolist_image} alt="" />
                </div>
                <div className="Detail-project">
                    <h3 className='Detail-title'>About Project</h3>
                    <ul className='AboutProject-wrap'>
                        <li>Created using React, HTML, CSS, and JavaScript</li>
                        <li>Allows users to add, edit, and delete tasks</li>
                        <li>Dynamic UI updates with React state management</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
export default TodoList