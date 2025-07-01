import './Competition.css'
import me_image from '../../../assets/PartimeImage/me2img.png'

const Competition = () => {
  return (
    <section className='Competition box-shadow'>
      <h2 className='Competition-title'>Competition</h2>

      <div className="Competition-Wrapper">
        <div className="Competition-content">
          <h2 className='Competition-Name'>
            The 67th Student Arts and Crafts Competition – English Skit Performance
          </h2>

          <h3 className='Competition-Detail'>
            at Kamphaeng Phet , Lower Secondary Education, Academic Year 2017
          </h3>

          <ul className="Competition-list">
            <li>
              Strengthened collaborative abilities through shared planning and team-based activities
            </li>
            <li>
              Enhanced spoken English proficiency through engaging storytelling practice and delivery
            </li>
            <li>
              Built confidence in theatrical expression and on-stage communication during live performances
            </li>
          </ul>
        </div>

        <div className="Competition-image">
          <img src={me_image} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Competition