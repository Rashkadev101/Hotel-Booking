import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTreeCity, faUser}from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
return (
    <div className="navbar">
    <div className="navContainer">
     <h3 className="logo"> Rashka<span className="booking">booking</span>  <FontAwesomeIcon icon={faTreeCity} className="logo-icon" /></h3>
     <div className="navItems">
     <div className="navSocial">
      <img src="images/twitter.png" alt="" className="socialTwit"/>
      <img src="images/instagram.jpg" alt="" className="socialTwit"/>
      <img src="images/facebook.jpg" alt="" className="socialTwit"/>
      <img src="images/linked.png" alt="" className="socialTwit"/>
     </div>
      <button className="navRegister"> <FontAwesomeIcon icon={faUser} className="registerUser"/>   Log in</button>
     </div>
    </div>
      
    </div>
  )
}

export default Navbar
