import './Partime.css'
import Partime_image from '../../../assets/PartimeImage/PartimeImage.jpg'

const Partime = () => {
  return (
    <section className='Partime box-shadow'>
      <h2 className='Partime-title'> Part Time</h2>
      <div className="Partime-Wrapper">
        <div className="Partime-content">
          <h2 className='Partime-Name'> Customer Service Fuel Station</h2>
          <h3 className='Partime-Detail'>at Bangchak, March 2023 - February 2024</h3>
          <ul className="Partime-list">
            <li>Improved patience and stress tolerance in a fast-paced work environment</li>
            <li>Gained experience in problem-solving during real-time customer service situations</li>
            <li>Developed strong teamwork skills through daily coordination with colleagues</li>
          </ul>
        </div>
        <div className="Partime-image">
          <img src={Partime_image} alt="" />
        </div>
      </div>
    </section>
  )
}
export default Partime