import './NavBar.css'
import logo from '../../assets/edusity_assets/logo.png'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'

import { useEffect, useState } from 'react'

const NavBar = () => {

      const [sticky , setSticky] = useState(false);

      useEffect(() => {
        window.addEventListener('scroll' , () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
      },[])
      const [sideBar, setSideBar] = useState(false)
      const toggleMenu = () =>{
            sideBar ? setSideBar(false) : setSideBar(true);

        }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
        <img src={logo} alt="" className='logo' />
        <ul className={sideBar? '' :'side-bar' }>
            <li><a href="#hero">Home</a></li>
            <li> <a href="#program">Program</a></li>
            <li> <a href="#about">About Us</a></li>
            <li> <a href="#campus">Campus</a></li>
            <li> <a href="#testimonials">Testimonials</a></li>
            <li><button className='btn'> <a href="#contact">Contact Us</a></button> </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default NavBar

