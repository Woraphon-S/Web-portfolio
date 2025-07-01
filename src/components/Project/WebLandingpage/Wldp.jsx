import './Wldp.css'
import { FaEye } from "react-icons/fa";
import wldp_image from '../../../assets/ProjectImage/weblandingpage_image.png'

const Wldp = () => {
    return (
        <div className="WebLandingPage-box box-shadow">
            <div className="WebLandingPage-title">
                <h2>🕹️WebLandingPage</h2>
                <div className="Livedemo-box">
                    <a href="https://woraphon-sometopup.netlify.app/" target="_blank" ><i><FaEye /></i><p>Live Demo</p></a>
                </div>
            </div>
            <div className="WebLandingPage-contents">
                <p>
                    A responsive landing page for a game top-up service, built using HTML, CSS, JavaScript, and React.
                    The website is fully responsive and optimized for various screen sizes, including mobile, tablet, and desktop.
                    The interface features interactive elements and a modern design to enhance user engagement and visual appeal.
                </p>
                <div className="SeeMore">
                    <a href="https://github.com/Woraphon-S/Landing-page-Some-TOPUP" target='_blank'>GitHub</a>
                </div>

                <div className='project-image'>
                    <img src={wldp_image} alt="" />
                </div>
                <div className="Detail-project">
                    <h3 className='Detail-title'>About Project</h3>
                    <ul className='AboutProject-wrap'>
                        <li>Designed a responsive layout for all screen sizes </li>
                        <li>Created with React, HTML, CSS, and JavaScript  </li>
                        <li>Includes interactive sections and clean visual design</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Wldp