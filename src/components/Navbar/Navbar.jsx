import { IoSunny } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = ({ setTheme, theme }) => {
    const [isToggle, setIsToggle] = useState(false);

    const togglemenu = () => {
        setIsToggle(prev => !prev);
    };

    const handleToggle = () => {
        setTheme(prev => prev === "soft-theme" ? "dark-theme" : "soft-theme");
    };

    return (
        <section className="Navbar">
            <div className="Nav-container">
                <div className="Nav-wraper">
                    <div className="theme-icon">
                        {theme === "soft-theme" ? <i onClick={handleToggle}><IoSunny /></i> : <i onClick={handleToggle}><IoMdMoon /></i>}
                    </div>
                    <ul className="ul-wrap">
                        <Link to="home" smooth={true} offset={-220} duration={500} component="li">
                            <a>Home</a>
                        </Link>
                        <Link to="sk" smooth={true} offset={-100} duration={500} component="li">
                            <a>Skills</a>
                        </Link>
                        <Link to="pj" smooth={true} offset={-60} duration={500} component="li">
                            <a>Projects</a>
                        </Link>
                        <Link to="exp" smooth={true} offset={-100} duration={500} component="li">
                            <a>Experience</a>
                        </Link>
                        <Link to="edc" smooth={true} offset={-100} duration={500} component="li">
                            <a>Education</a>
                        </Link>
                        <Link to="ct" smooth={true} offset={-300} duration={500} component="li">
                            <a>Contract</a>
                        </Link>
                    </ul>
                    <div className="resume-btn">
                        <button><i><MdFileDownload /></i><p>Resume</p></button>
                    </div>
                </div>
                <div className="nav-toggle-container">
                    <div className="nav-toggle-wrapper">
                        <div onClick={togglemenu} className="hamburger-menu">
                            {isToggle === true ? <i><RxCross2 /></i> : <i><GiHamburgerMenu /></i>}
                        </div>
                        <div className="resume-btn">
                            <button><i><MdFileDownload /></i><p>Resume</p></button>
                        </div>
                        <div className={`menu-container ${isToggle ? 'slide-in' : 'slide-out'}`}>
                            <h2 className="menu-title">
                                Menu
                            </h2>
                            <ul className="menu-list">
                                <li> <Link to="home" smooth={true} offset={-300} duration={500} component="li"><a className="icon"><i><FaHome /></i> Home</a></Link></li>
                                <li> <Link to="sk" smooth={true} offset={-80} duration={500} component="li"><a>🛠 Skills</a></Link></li>
                                <li> <Link to="pj" smooth={true} offset={-80} duration={500} component="li"><a>🚀Project</a></Link></li>
                                <li> <Link to="exp" smooth={true} offset={-80} duration={500} component="li"><a className="icon"><i><MdOutlineWorkspacePremium /></i> Experience</a></Link></li>
                                <li> <Link to="edc" smooth={true} offset={-80} duration={500} component="li"><a>🎓Education</a></Link></li>
                                <li> <Link to="ct" smooth={true} offset={-80} duration={500} component="li"><a className="icon"><i><FaSquarePhone /></i>Contact</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar