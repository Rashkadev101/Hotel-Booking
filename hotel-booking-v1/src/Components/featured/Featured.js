import './Featured.css'

const Featured = () => {

  return (
  <div className="featured">
    <div className="featuredItem">
      <img src="https://suuqplus.com/wp-content/uploads/2021/03/Decale-hotel.jpg" alt="" className="featuredImg" />
      <div className="featuredTitle">
      <div className="featuredFalag">
      <img src="https://cdn.britannica.com/18/18-004-43399622/Flag-Somalia.jpg"
       className="decale" alt=""/>
      <div/>
        <h1>Decale Hotel</h1>
        </div>
        <h3>158 properties</h3>
      </div>
    </div>
    <div className="featuredItem">
      <img src="https://twomonkeystravelgroup.com/wp-content/uploads/2017/02/Ultimate-List-of-Best-Luxury-Hotels-in-Djibouti-Imperial-Resort-Red-Sea-Hotel.jpg" alt="" className="featuredImg" />
      <div className="featuredTitle">
      <div className="featuredFalag">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/2560px-Flag_of_Djibouti.svg.png"
       className="jibouti" alt=""/>

      </div>
        <h1>Djibouti Hotel </h1>
        <h3>548 properties</h3>
      </div>
    </div>
    <div className="featuredItem">
      <img src="https://i.ytimg.com/vi/-8y-yeFRx6g/maxresdefault.jpg" alt="" className="featuredImg" />
      <div className="featuredTitle">
      <div className="featuredFalag">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Somaliland.svg/1280px-Flag_of_Somaliland.svg.png" alt=""
          className="Damal"
        />
      </div>
        <h1>Damal Hotel</h1>
        <h3>118 properties</h3>
      </div>
    </div>
   
    
   </div>
  )
}

export default Featured
