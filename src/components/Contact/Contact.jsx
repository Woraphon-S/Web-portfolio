import './Contact.css'
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer id='ct'>
      <div className="contact-container">
        <div className="contact-wrapper">
          <h2 className="contact-title">
            Contact
          </h2>

          <div className="gmail-box">
            <i><BiLogoGmail /></i>
            <p>monaikaitsaman@gmail.com</p>
          </div>
          <div className="phone-box">
            <i><MdOutlinePhoneIphone /></i>
            <p>0622873086</p>
          </div>
          <div className="link-wrap">
            <a href='https://github.com/Woraphon-S' target='_blank' className="github-box">
              <i><IoLogoGithub /></i>
              <p>GitHub</p>
            </a>
            <a href='https://www.facebook.com/worraphon.sarraphon.1' target='_blank' className="facebook-box">
              <i><FaFacebook /></i>
              <p>Facebook</p>
            </a>
            <a href='https://www.instagram.com/s__i.mon?igsh=MWNxNDYza2pwY29waA==' target='_blank' className="instagram-box">
              <i><FaInstagram /></i>
              <p>Instagram</p>
            </a>
          </div>
          <div className='coppyright'>
            © 2025 Woraphon Saraphon. Built with React.js.
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Contact