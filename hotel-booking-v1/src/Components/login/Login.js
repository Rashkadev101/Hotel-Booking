import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope, faLock, faUser, faLink, faBoxOpen, faSave} from "@fortawesome/free-solid-svg-icons"

const Login = () => {
  
  
  return (
    <div>
    <div className="loginContainer">
    <div className="formPic"></div>
    <div className="loginWrapper">
    <div className="loginTitle">
        <h2>create accont</h2>
        <p className="loginPar">or use our email for registration</p>
        <div className="loginIcons">
        <FontAwesomeIcon icon={faLink} className="link" />
        <FontAwesomeIcon icon={faBoxOpen} className="boxOpen" />
        <FontAwesomeIcon icon={faSave} className="save" />
        </div>
   
    </div>
       <div className="loginName">
        <FontAwesomeIcon icon={faUser} className="iconUser"/>
        <input type="name" placeholder="enter your name" className="inputName" />
       </div>

        <div className="loginText">
        <FontAwesomeIcon icon={faEnvelope} className="iconEnvelope" />
        <input type="email" placeholder="enter you email" className="inputText" />
        </div>

        <div className="loginPass">
        <FontAwesomeIcon icon={faLock} className="iconLock" />
        <input type="password" placeholder="password..." className="inputPass" />
        </div>
        <button className="btnLoginRegister">register now</button>
        
      
    </div>
       
    </div>

      
    </div>
  )
}

export default Login
