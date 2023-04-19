import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Email from "../../Components/email/Email"
import Footer from "../../Components/footer/Footer"
import Header from "../../Components/header/Header"
import Navbar from "../../Components/navbar/Navbar"
import { useState } from "react"
import "./Hotel.css"
 
const Hotel = () => {
  //variable slideNumber & setSlideNumber initialized Zero.
  //variable open & setOpen initialized false
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  //Photos....
  const photos =  [
  
    {
      src:"https://i.redd.it/ws35o968vyh41.jpg"
    },
    {
      src:"https://www.puntlandbusiness.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-19-at-1.25.07-AM-7.jpeg"
    },
    {
      src:"https://twomonkeystravelgroup.com/wp-content/uploads/2017/02/Ultimate-List-of-Best-Luxury-Hotels-in-Djibouti-Hotel-La-siesta.jpg"
    },
    {
      src:"https://safarkaab.com/Uploads/8799716546044f63b9b5db.jpg"
    },
    {
      src:"https://media-cdn.tripadvisor.com/media/photo-s/17/b0/e7/8c/grand-haadi-hotel.jpg"
    },
    {
      src:"https://media-cdn.tripadvisor.com/media/photo-s/1b/7c/33/c8/elite-hotel-provides.jpg"
    },
    {
      src:"https://www.daljir.com/wp-content/uploads/2020/03/1P8A8418.jpg"
    },
    {
      src:"https://suuqplus.com/wp-content/uploads/2021/04/doorbin-hotel-272x231.jpg"
    },
    {
      src:"https://www.daauus.so/wp-content/uploads/2019/04/Behance-Projects-25.jpg"
    },
  ];
 
// handleOpen function index 
  const handleOpen = (i) => {
     setSlideNumber(i);
     setOpen(true);
  };
// handleMove sliding photo in left side
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 8 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 8 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className="hotelContainer">
    {open && <div className="slider">
    <FontAwesomeIcon icon={faCircleXmark} className="close"
      onClick={() => setOpen(false)}
    />
    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"
      onClick={() => handleMove("l")}
    />
    <div className="sliderWrapper">
      <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"
      onClick={() => handleMove("r")}
    />
    </div>}
      <div className="hotelWrapper">
        <button className="bookNow">reserve or book now!</button>
        <h1 className="hotelTitle">Decale Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Addan ade airport rood</span>
        </div>
        <span className="hotelDistance">
          excellent locaion - 500m from center
        </span>
        <span className="hotelPriceHightLight">
          book a stay over $238 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo,i)=>(
            <div className="hotelImgWrapper">
              <img 
              onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Relax in our Airport Hotel</h1>
            <p className="hotelDesc">
            Décalé Airport Hotel is located next to Aden Abdulle 
            International Airport and you don't need to loose any
             time to find best comfort and quality Décalé Airport
              Hotel is the perfect Mogadishu lodging choice for your 
              trip to Somalia. With numerous amenities for guests 
              such as , laundry service, business center, you will
               wake up at Décalé Airport Hotel feeling excited every
                day for your time in Mogadhishu. Don’t let this amazing
                 reservation opportunity pass you by, book your stay at
                  Décalé Airport Hotel today to make the most of your 
                  time in Somali Mogadhishu.
            </p>
            <p className="hotelDesc">
            Décalé Airport Hotel is located next to Aden Abdulle 
            International Airport and you don't need to loose any
             time to find best comfort and quality Décalé Airport
              Hotel is the perfect Mogadishu lodging choice for your 
              trip to Somalia. With numerous amenities for guests 
              such as , laundry service, business center, you will
               wake up at Décalé Airport Hotel feeling excited every
                day for your time in Mogadhishu. Don’t let this amazing
                 reservation opportunity pass you by, book your stay at
                  Décalé Airport Hotel today to make the most of your 
                  time in Somali Mogadhishu.
            </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1> prefect for a 9-night atay!</h1>
            <span>
              Location in the real heart of Decale, this property has an 
              excellent location score of 9.8!
            </span>
            <h2> <b>US $238</b> (9 night)</h2>
            <button> reserve or book now!</button>
          </div>
        </div>
      </div>
      <Email/>
      <Footer/>
    </div>
    </div>
  );
};

export default Hotel
