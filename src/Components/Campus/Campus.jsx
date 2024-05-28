import './Campus.css'
import Gallary_1 from './..//..//assets/edusity_assets/gallery-1.png'
import Gallary_2 from './..//..//assets/edusity_assets/gallery-2.png'
import Gallary_3 from './..//..//assets/edusity_assets/gallery-3.png'
import Gallary_4 from './..//..//assets/edusity_assets/gallery-4.png'
import white_arrow from './..//..//assets/edusity_assets/white-arrow.png'


const Campus = () => {
  return (
    <div className="campus" id='campus'>
        <div className="gallery">
            <img src={Gallary_1} alt="" />
            <img src={Gallary_2} alt="" />
            <img src={Gallary_3} alt="" />
            <img src={Gallary_4} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus