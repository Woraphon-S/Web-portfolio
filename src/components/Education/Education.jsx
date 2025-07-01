import './Education.css'
import university_img from '../../assets/university_img.png'
import school_img from '../../assets/school_image.jpg'
import { useEffect, useRef, useState } from "react";
import "../../App.css";

const Education = () => {
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
    <section id='edc' className={`Education fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      <h2 className="Education-title title-color">🎓Education</h2>
      <div className="Education-Wrapper">
        <div className="university-box">
          <div className="university-image">
            <img src={university_img} alt="" />
          </div>
          <div className="university-name">
            Pibulsongkram Rajabhat University
          </div>
          <div className="university-department">
            Faculty of Science and Technology
          </div>
          <div className="university-major">
            Bachelor of Science in Information Technology
          </div>
          <div className="university-period">
            (2022 - Present)
          </div>
          <div className="university-gpa">
            Current GPA: 3.56
          </div>
        </div>

        <div className="school-box">
          <div className="school-image">
            <img src={school_img} alt="" />
          </div>
          <div className="school-name">
            Saingampittayakom School
          </div>
          <div className="school-department">
            Language-Major Program
          </div>
          <div className="school-major">
            Arts Program specializing in Korean Language
          </div>
          <div className="school-period">
            (2562 - 2565)
          </div>
          <div className="school-gpa">
            GPA: 2.75
          </div>
        </div>
      </div>
    </section>
  )
}
export default Education