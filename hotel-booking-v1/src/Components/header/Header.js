import './Header.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBed,
   faCalendarDays,
    faCar, 
     faPerson, 
     faPlane, 
     faSwimmingPool, 
     faTaxi
     } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from "react-date-range";
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";



const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date,setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  //variabes openOptions & setOpenOptions initioalized false
  const [openOptions, setOpenOptions] = useState(false);
  // variable options & setOptions initioalazed hotel property (adult, children, and room).
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const openMenu = () => {
    document.querySelector('.headerListItem').classList.add('open')
  }
  const handleOption = (name,operation) => {
    setOptions((prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] -1,
      };
    }));
  };
  //defination handleSearch
  const handleSearch = () => {
    navigate("./hotels", {state:{ destination, date, options}});

  };
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
    <div className="headerList">
    <div className="headerListItem active">
    <FontAwesomeIcon icon={faBed} />
    <span>Stays</span>
    </div>
    <div className="headerListItem">
    <FontAwesomeIcon icon={faPlane} />
    <span>Flights</span>
    </div>
    <div className="headerListItem">
    <FontAwesomeIcon icon={faCar} />
    <span>Car rentals</span>
    </div>
    <div className="headerListItem">
    <FontAwesomeIcon icon={faSwimmingPool} />
    <span>Swimming Pool</span>
    </div>
    <div className="headerListItem">
    <FontAwesomeIcon icon={faTaxi} />
    <span>Airport taxis</span>
    
    </div>
   
    </div>
    <FontAwesomeIcon icon={faBars}
    onClick={openMenu}
      className="headerOpenMenu"
     
    />
    { type !== "list" &&
      <> <h1 className="headerTitle"> Enjoy your dream vacation.</h1>
    <p className="headerDesc">
        Get rewarded for you travels - unlock instant saving of 40% or more
        with a free Rashkabooking account
    </p>
    <button className="btnheader"> Sign in / Register</button>
    <div className="headerSearch">

        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder="type here to search" 
            className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
        
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">
            {`${format(date[0].startDate, " MM/dd/yyyy"
            )} to ${format(date[0].endDate, " MM/dd/yyyy ")}`}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date} 
              className="date"
              minDate={new Date()}
            />}
        
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">
            {`${options.adult} 
            adult . ${options.children} children . ${options.room} room`}</span>

            { openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">  adult</span>
                <div className="optionCounter">
                <button 
                disabled={options.adult <= 1}
                className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={()=>
                handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">  children</span>
                <div className="optionCounter">
                <button 
                disabled={options.children <= 1}
                className="optionCounterButton" onClick={()=>handleOption("children", "d")}
                >-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}
                >+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText"> rooms</span>
                <div className="optionCounter">
                <button
                disabled={options.room <= 1}
                 className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}
                >+</button>
                </div>
              </div>
            </div>}
             
           </div>
        <div className="headerSearchItem">
            <button onClick={handleSearch} className="btnSearch">Search</button>
        </div>
    </div></>}
    </div>
   
    </div>
  )
}

export default Header
