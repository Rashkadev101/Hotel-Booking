import './PropertyList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfStroke }from '@fortawesome/free-solid-svg-icons'

function PropertyList() {
  return (
    <div className="pList">
    <div className="pListItem">
        <img src="https://decalehotel.com/wp-content/uploads/2019/11/deluxe-room-detail-1110x611.jpg" alt=""
            className="pListImg"
        />
        <div className="pListTitle">
            <h1>Decale hotel</h1>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <h3 className="pListStar">138 hotels</h3>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://pbs.twimg.com/media/EjU3rYbXYAAf3Cd.jpg" alt=""
            className="pListImg"
        />
        <div className="pListTitle">
            <h1>Milgo</h1>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStarHalfStroke} className="propStar"/>
         
            <h3 className="pListStar">574 restureant</h3>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://pbs.twimg.com/media/FEv4vUVXsAQfrZO.jpg" alt=""
            className="pListImg"
        />
        <div className="pListTitle">
            <h1>Lass coffee</h1>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStarHalfStroke} className="propStar"/>
            <FontAwesomeIcon icon={faStarHalfStroke} className="propStar"/>
            
            <h3 className="pListStar">123 Coffateria</h3>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://www.daauus.so/wp-content/uploads/2019/04/Behance-Projects-25.jpg" alt=""
            className="pListImg"
        />
        <div className="pListTitle">
            <h1>Marhaba hotel</h1>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStar} className="propStar"/>
            <FontAwesomeIcon icon={faStarHalfStroke} className="propStar"/>
            <h3 className="pListStar">242 hotel</h3>
        </div>
    </div>
      
    </div>
  )
}

export default PropertyList
