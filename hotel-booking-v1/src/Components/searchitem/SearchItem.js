import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
    <img src="https://decalehotel.com/wp-content/uploads/2019/11/deluxe-room-detail-1110x611.jpg" 
    alt="" className="siImg"/>
    <div className="siDesc">
        <h1 className="siTitle">Decale Airport Hotel </h1>
        <span className="siDistance"> 500m from center</span>
        <span className="siTaxiOp"> free airport taxi</span>
        <span className="siSubtitle">
            studio apartment with air conditioning
        </span>
        <span className="siFeatures">
            enter studio * 1 bathroom * 21m 1 full bed
        </span>
        <span className="siCancelOp"> free cancellation</span>
        <span className="siCancelOpSubtitle">
            you can cancel later, so lock in this great price today!
        </span>

    </div>
    
    <div className="siDetails">
        <div className="siRating">
            <span className="siExcellent">excellent</span>
            <button>8.4</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">US $238</span>
            <span className="siTaxOp"> includes taxes and fees</span>
            <button className="siCheckButton"> see availability</button>
        </div>
    </div>
      
    </div>
  );
};

export default SearchItem
