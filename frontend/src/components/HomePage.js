import axios from "axios";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {getHotels, getAllHotels, deleteHotelAction} from "../redux/hotels/hotelsAction"

const HomePage = () => {
  // const [hotels, setHotels] = useState([]);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotels = useSelector(state => state.allHotels)
 
  
  useEffect(() => {
    dispatch(getAllHotels())
  }, [dispatch])

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

  
   
  return (
    <div>
      <button type="button" onClick={createNewHotel}>Create New Hotel</button>
      <button type="button" onClick={createNewRoom}>Create New Room</button>
      {msg && <p>{msg}</p>}
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel._id}>
          <h1>{hotel.name}</h1>
          <p>Facilities: {hotel.desc}</p>
          <p>City: {hotel.city}</p>
          <img src={hotel.photos} alt={hotel.name} />
          <button id={hotel._id} onClick={handleClick}>View and Book</button>          
          <button id={hotel._id} onClick={handleDelete}>Delete</button>          
          </div>
      ))}
    </div>
  )
}

export default HomePage;