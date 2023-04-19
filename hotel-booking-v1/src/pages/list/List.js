import "./List.css"
import { useState} from "react"
import { useLocation } from "react-router-dom";
import Header from '../../Components/header/Header'
import Navbar from '../../Components/navbar/Navbar'
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/searchitem/SearchItem";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate]= useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options,setOptions] = useState(location.state.options)
  return (
  <div>

  <Navbar/> 
  <Header type="list"/>
  <div className="ListContainer">
    <div className="ListWrapper">
      <div className="ListSearch">
        <h1 className="LsTitle">Search</h1>
        <div className="LsItem">
          <label>Destination</label>
          <input type="text" placeholder={destination}/>
        </div>
        <div className="LsItem">
        <label>Check-in Date</label> 
        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate, "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
        <DateRange onChange={(item) => setDate([item.useLocation])}
        minDate={new Date()}
          ranges={date}
        />
        )}
        </div>
        <div className="LsItem">
          <label>Options</label>
          <div className="LsOptions">
          <div className="LsOptionItem">
            <span className="LsOptionText">
              Min price <small>per night</small>
            </span>
            <input type="number" className="LsOptionInput"/>
          </div>
          <div className="LsOptionItem">
            <span className="LsOptionText">
              Max price <small>per night</small>
            </span>
            <input type="number" className="LsOptionInput"/>
          </div>
          <div className="LsOptionItem">
            <span className="LsOptionText">
              Adult
            </span>
            <input type="number" className="LsOptionInput"
              placeholder={options.adult}
              min={1}
            />
          </div>
          <div className="LsOptionItem">
            <span className="LsOptionText">
              Children
            </span>
            <input type="number" className="LsOptionInput"
              placeholder={options.children}
              min={0}
            />
          </div>
          <div className="LsOptionItem">
            <span className="LsOptionText">
              Room
            </span>
            <input type="number" className="LsOptionInput"
              placeholder={options.room}
              min={1}
            />
          </div>
          </div>
        </div>
        <button>search</button>

      </div>
      <div className="ListResult">
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
      </div>
    </div>
  </div>
  </div>
      
  
  );
};

export default List
