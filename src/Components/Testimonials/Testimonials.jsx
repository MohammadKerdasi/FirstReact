import './Testimonials.css'
import next_icon from './..//..//assets/edusity_assets/next-icon.png'
import back_icon from './..//..//assets/edusity_assets/back-icon.png'
import user_1 from './..//..//assets/edusity_assets/user-1.png'
import user_2 from './..//..//assets/edusity_assets/user-2.png'
import user_3 from './..//..//assets/edusity_assets/user-3.png'
import user_4 from './..//..//assets/edusity_assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }




return (
    <div className="Testimonials" id='testimonials' >
        <img src={next_icon} alt="" className='Next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Dicta atque facere enim rerum excepturi molestiae delectus architecto sunt
                            asperiores minima illo nemo doloribus nesciunt ab, 
                            blanditiis minus ea dolorem voluptatibus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Dicta atque facere enim rerum excepturi molestiae delectus architecto sunt
                            asperiores minima illo nemo doloribus nesciunt ab, 
                            blanditiis minus ea dolorem voluptatibus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Dicta atque facere enim rerum excepturi molestiae delectus architecto sunt
                            asperiores minima illo nemo doloribus nesciunt ab, 
                            blanditiis minus ea dolorem voluptatibus.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Dicta atque facere enim rerum excepturi molestiae delectus architecto sunt
                            asperiores minima illo nemo doloribus nesciunt ab, 
                            blanditiis minus ea dolorem voluptatibus.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials