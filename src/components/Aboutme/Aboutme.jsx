import me from '../../assets/Me.jpg'
import './Aboutme.css'

const Aboutme = () => {
    return (
        <section id='home' className='Aboutme'>
            <div className="Aboutme-container box-shadow">
                <div className='box-content'>
                    <div className='text-box'>
                        <h2 className="myname">
                            Woraphon Saraphon
                        </h2>
                        <h3 className='major'>Information Technology Student</h3>
                        <div className="aboutme-box">
                            <div className="seeking-box">
                                <h3>I am seeking an internship as a</h3>
                                <div className='dev-box'>
                                    <span>Web Developer</span>
                                    <span>Front-End Developer</span>
                                    <span>Back-End Developer</span>
                                </div>
                                <h3><p>Duration</p>: November 3, 2025 - February 2, 2026 <p>(3 months)</p></h3>
                            </div>
                        </div>
                    </div>
                    <div className='me-image'>
                        <img src={me} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Aboutme