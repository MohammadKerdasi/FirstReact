import NavBar from "./Components/NavBar/NavBar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"





const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <div className="container">
      <Title subTitle='Our Program' Title='What We Offer'/>
    <Programs/>
    <About/>
    <Title subTitle='Gallary' Title='Campu Photos'/>
    <Campus />
    <Title subTitle='TESTIMONIALS' Title='What Students Says'/>
    <Testimonials/> 
    <Title subTitle='Contact Us' Title='Get In Touch'/> 
    <Contact/>   
    <Footer/>
    </div>
    
    </>
  )
}

export default App