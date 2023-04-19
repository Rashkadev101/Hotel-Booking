import './FeaturedProperties.css'

function FeaturedProperties() {
  return (
    <div className="fp">
    <div className="fpItem">
    <img src="https://i.redd.it/9ybolu8dzzh41.jpg" alt=""
        className="fpImg"
    />
    <span className="fpName">Decale Airport Hotel</span>
    <span className="fpCity"> Mogadishu</span>
    <span className="fpPrice">Starting from US$310</span>
    <div className="fpRating">
        <button>9.5</button>
        <span>Excellent</span>
    </div>
    </div>
    <div className="fpItem">
    <img src="https://pbs.twimg.com/media/ESzlQmJXkAAwdct.jpg" alt=""
        className="fpImg"
    />
    <span className="fpName">Martisoor Hotel</span>
    <span className="fpCity"> Garowe</span>
    <span className="fpPrice">Starting from US$120</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
    </div>
    <div className="fpItem">
    <img src="https://safarkaab.com/Uploads/8799716546044f63b9b5db.jpg" alt=""
        className="fpImg"
    />
    <span className="fpName">Berbera Beach Hotel</span>
    <span className="fpCity"> Berbera</span>
    <span className="fpPrice">Starting from US$130</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
    </div>
    <div className="fpItem">
    <img src="https://p.bookcdn.com/data/Photos/380x200/9883/988376/988376164/Djibouti-Palace-Kempinski-photos-Exterior.JPEG" alt=""
        className="fpImg"
    />
    <span className="fpName">Djibouti City Hotel</span>
    <span className="fpCity"> Djibouti</span>
    <span className="fpPrice">Starting from US$340</span>
    <div className="fpRating">
        <button>9.7</button>
        <span>Excellent</span>
    </div>
    </div>
      
    </div>
  )
}

export default FeaturedProperties
