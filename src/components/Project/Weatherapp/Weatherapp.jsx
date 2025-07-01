import './Weatherapp.css'
import WeatherApp_image from '../../../assets/ProjectImage/WeatherApp_image2.png'
import { FaEye } from "react-icons/fa";

const Weatherapp = () => {
    return (
        <section className="Weatherapp-box box-shadow">
            <div className="Weatherapp-title">
                <h2>🌤️WeatherApp</h2>
                <div className="Livedemo-box">
                    <a href="https://woraphon-weatherapp.netlify.app/" target="_blank" ><i><FaEye /></i><p>Live Demo</p></a>
                </div>
            </div>
            <div className="Weatherapp-contents">
                <p>
                    A simple weather application built with HTML, CSS, JavaScript, and React.
                    It fetches real-time data from a weather API to display temperature, location, humidity, and wind speed.
                    Users can search by city. The UI is responsive with clean, modern design.
                </p>
                <div className="SeeMore">
                    <a href="https://github.com/Woraphon-S/Weather-App" target='_blank'>GitHub</a>
                </div>

                <div className='project-image'>
                    <img src={WeatherApp_image} alt="" />
                </div>
                <div className="Detail-project">
                    <h3 className='Detail-title'>About Project</h3>
                    <ul className='AboutProject-wrap'>
                        <li>Built with React, HTML, CSS, and JavaScript  </li>
                        <li>Integrated weather API to fetch real-time data  </li>
                        <li>Displays temperature, humidity, wind speed, and location </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
export default Weatherapp