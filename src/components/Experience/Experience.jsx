import Competition from './Competition/Competition'
import './Experience.css'
import Partime from './Parrtime/Partime'
import { MdOutlineWorkspacePremium } from "react-icons/md";


const Experience = () => {
  return (
    <section id='exp' className='Experience'>
      <div className='Experience-title'>
        <i className='title-color'><MdOutlineWorkspacePremium /></i>
        <h2 className='title-color'>Experience</h2></div>
      <div className='Experience-wrapper'>
        <Partime />
        <Competition />
      </div>
    </section>
  )
}
export default Experience