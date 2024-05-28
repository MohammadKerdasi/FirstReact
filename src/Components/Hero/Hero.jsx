import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>We Ensure Better Eduction For a Better World</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis mollitia ullam,
                 repellendus non modi nulla nostrum ipsam vitae vel? Deserunt mollitia alias minima 
                  voluptatum enim debitis.</p>
                  <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero