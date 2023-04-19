import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Email.css'

function Email() {
  return (
    <div className="email">
    <div className="email-wrapper">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <div className="emailItem">
            <input type="text" placeholder="your email..."/>
            <button className="btnSubscribe">subscribe</button>
        </div>
        <FontAwesomeIcon icon={faSquareCheck } className="emailIcon"/>
        <span> Send me a link to get the FREE Rashkabooking.com app!</span>
       
    </div>
   
    <div className="listYourProperty">
        <button className="btnProp">List your property</button>
        <hr></hr>
        <div className="listYourPropertyItem">
            <h3>mobile version</h3>
            <h3>your account</h3>
            <h3>make change to your booking online</h3>
            <h3>customer service help</h3>
            <h3>become an affiliate</h3>
            <h3>booking for business</h3>
        </div>
    </div>
    
      
    </div>

  )
}

export default Email
