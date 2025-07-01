import './Skills.css'
import c from '../../assets/Programmingicon/c.png'
import javascript from '../../assets/Programmingicon/javascript.png'
import sql from '../../assets/Programmingicon/sql.png'
import typescript from '../../assets/Programmingicon/typescript.png'
import react_icon from '../../assets/FontendIcon/react.png'
import { TbBrandNextjs } from "react-icons/tb";
import html_icon from '../../assets/FontendIcon/html.png'
import css_icon from '../../assets/FontendIcon/css.png'
import tailwind_icon from '../../assets/FontendIcon/tailwind.png'
import nodejs_icon from '../../assets/BackendIcon/backend_icon.png'
import firebase_icon from '../../assets/DatabaseIcon/firebase_icon.png'
import mysql_icon from '../../assets/DatabaseIcon/mysql_icon.png'
import git_icon from '../../assets/ToolsIcon/git.png'
import github_icon from '../../assets/ToolsIcon/github.png'

const Skills = () => {
    return (
        <div id='sk' className='Skills'>
            <h2 className='Skills-title title-color'>
                🛠 Skills
            </h2>
            <div className="Skills-wrapper box-shadow">
                <div className="top-wrap">
                    <div className="Programming-box">
                        <h2 className='PG'>Programming</h2>
                        <div className="JavaScript-item">
                            <div className='title-box'>
                                <img src={javascript} alt="" />
                                <h2>JavaScript</h2>
                            </div>

                        </div>
                        <div className="TypeScript-item">
                            <div className='title-box'>
                                <img src={typescript} alt="" />
                                <h2>TypeScript</h2>
                            </div>

                        </div>
                        <div className="Cplusplus-item">
                            <div className='title-box'>
                                <img src={c} alt="" />
                                <h2>C++</h2>
                            </div>

                        </div>
                        <div className="sql-item">
                            <div className='title-box'>
                                <img src={sql} alt="" />
                                <h2>SQL</h2>
                            </div>

                        </div>
                    </div>




                    {/*  Frontend box */}


                    <div className="Frontend-box">
                        <h2 className='FE'>Frontend</h2>
                        <div className="react-item">
                            <div className='title-box'>
                                <img className='react_icon' src={react_icon} alt="" />
                                <h2>React.js</h2>
                            </div>

                        </div>
                        <div className="nextjs-item">
                            <div className='title-box'>
                                <span className='nextjsicon'><TbBrandNextjs /></span>
                                <h2>Next.js</h2>
                            </div>

                        </div>

                        <div className="tailwind-item">
                            <div className='title-box'>
                                <img src={tailwind_icon} alt="" />
                                <h2>Tailwind CSS</h2>
                            </div>
                        </div>

                        <div className="html-item">
                            <div className='title-box'>
                                <img src={html_icon} alt="" />
                                <h2>HTML</h2>
                            </div>

                        </div>
                        <div className="css-item">
                            <div className='title-box'>
                                <img src={css_icon} alt="" />
                                <h2>CSS</h2>
                            </div>
                        </div>
                    </div>



                    {/* Backend */}



                    <div className="Backend-box">
                        <h2 className='BE'>Backend</h2>
                        <div className="nodejs-item">
                            <div className='title-box'>
                                <img className='nodejs_icon' src={nodejs_icon} alt="" />
                                <h2>Node.js</h2>
                            </div>
                        </div>
                    </div>

                    {/* Database */}

                    <div className="Database-box">
                        <h2 className='DB'>Database</h2>
                        <div className="Firebase-item">
                            <div className='title-box'>
                                <img className='firebase_icon' src={firebase_icon} alt="" />
                                <h2>Firebase</h2>
                            </div>
                        </div>

                        <div className="MySQL-item">
                            <div className='title-box'>
                                <img className='mysql_icon' src={mysql_icon} alt="" />
                                <h2>MySQL</h2>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Wrapper */}


                <div className="bottom-wrapper">
                    <div className="softskills-item">
                        <h2 className="softskills-title">
                            Soft Skills
                        </h2>
                        <ul className='ul-wrapper'>
                            <li><p>Teamwork and collaboration</p></li>
                            <li><p>Ability to work under pressure</p></li>
                            <li><p>Fast learner with technical curiosity</p></li>
                            <li><p>Always looking to improve</p></li>
                            <li><p>Able to stay calm and composed in stressful situations</p></li>


                        </ul>

                    </div>

                    {/* Languages */}

                    <div className="languages-item">
                        <h2 className="languages-title">
                            Languages
                        </h2>
                        <ul className='ul-wrapper'>
                            <li><p>Thai: Native </p></li>
                            <li><p>English skills: Good listening and reading comprehension.</p></li>
                        </ul>

                    </div>

                    {/* Tools */}

                    <div className="Tools-item">
                        <h2 className="Tools-title">
                            Tools
                        </h2>
                        <ul className='ul-wrapper'>
                            <li><img src={github_icon} alt="" /> <p>GitHub</p></li>
                            <li><img src={git_icon} alt="" /><p>Git</p></li>
                            <li><p>IDEs: Visual Studio Code, Arduino IDE.</p></li>
                            <li><p>Comunication: Discord, Microsoft Teams,Zoom</p></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Skills