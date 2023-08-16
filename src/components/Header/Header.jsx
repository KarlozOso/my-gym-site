import Resct from "react"
import './Header.css'
import Logo from "../../assets/logo.png"


const Header = () =>{
  return(
    <div className='header'>
    
    <img src={Logo} alt='Logo' className='logo'/>

      <ul className='header-menu'>
      <li></li>
         <li>Home</li>
         <li> Programs</li>
         <li> Why us</li>
         <li>Plans</li>
         <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
