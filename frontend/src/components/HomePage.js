import axios from "axios";
import React, {useState, useEffect, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {getHotels, getAllHotels, deleteHotelAction} from "../redux/hotels/hotelsAction";
import {motion} from "framer-motion";

const HomePage = () => {
  // const [hotels, setHotels] = useState([]);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotels = useSelector(state => state.allHotels)
 
  
  useEffect(() => {
    dispatch(getAllHotels())
  }, [])

  const handleClick = e =>{
    e.preventDefault()
    console.log(e.target.id)
    dispatch(getHotels(e.target.id))
    navigate("/hotels")
  }

  const createNewHotel = () => {
    navigate("/createhotel")
  }

  const createNewRoom = () => {
    navigate("/createroom")
  }

  
  const handleDelete = async(e) => {
      e.preventDefault()
      try {
        const res = await axios.delete(`http://localhost:5000/api/v1/hotels/${e.target.id}`, { withCredentials: true } )
       const data = await res.data
       console.log(data)
        setMsg(data)
        dispatch(deleteHotelAction(e.target.id))
      } catch (error) {
        console.error(error.message)
      }     
      
  }

  const [width, setWidth] = useState(0)

  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 500)
  }, [])

  
   
  return (
    <div>
      <button type="button" onClick={createNewHotel}>Create New Hotel</button>
      <button type="button" onClick={createNewRoom}>Create New Room</button>

      {msg && <p>{msg}</p>}

      <p className="heading_text">...you wanna book a hotel</p>
<div className="main_card_container">
    <motion.div ref={carousel} className="container-carousel">  
  
      <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">
      {hotels.map((hotel) => {
        
        const base64String = btoa(String.fromCharCode(...hotel.photos.image.data.data))
        return ( 
        <motion.div  key={hotel._id} className="card" >          
          <h3 className="hotel_name">{hotel.name}</h3>
          <motion.div className="img_container" whileTap={{scale: 1.1}}>
             <img src={`data:images/jpeg;base64,${base64String}`} alt={`${hotel.name}`} />
          </motion.div>
          <h4 className="city_name">{hotel.city}</h4> 
          <p className="desc">Facilities: {hotel.desc}</p>
           <div className="btn_container">       
             <button type="button" className="view_button" id={hotel._id} onClick={handleClick} style={{backgroundColor: 'unset'}}>View and Book</button>          
             <button type="button" className="view_button" id={hotel._id} onClick={handleDelete} style={{backgroundColor: 'unset' }}>Delete</button>          
          </div>
        </motion.div>
)})}
</motion.div>
    </motion.div>
    </div>
    </div>
  )
}

export default HomePage;