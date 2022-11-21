import axios from "axios";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import getRoom from "../redux/rooms/roomsAction";
import { deleteRoomAction } from "../redux/hotels/hotelsAction";

const HotelPage = () => {
  const [msg, setMsg] = useState("");
  const hotel = useSelector(state => state.hotel)
 console.log(hotel)
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const handleClick = (e) => {
  e.preventDefault();  
  dispatch(getRoom(e.target.id))
  navigate("/bookhotel")
 }

 const handleDelete = async(e) => {
  e.preventDefault()
  console.log(e.target.id)  
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/rooms/${e.target.id}/${hotel._id}`, { withCredentials: true } )
    const data = await res.data
    console.log(data)
    dispatch(deleteRoomAction(e.target.id))
    setMsg(data)
  } catch (error) {
    console.error(error.message)
  }
 }

  return (
    <>
     {msg && <p>{msg}</p>}
      <h1>{hotel.name}</h1>
      <p>{hotel.address}</p>
      <p>{hotel.desc}</p>
      <p>{hotel.city}</p>
      <p>{hotel.cheapest_price}</p>
      <p>{hotel.rating}</p>
      <div>
        {hotel.rooms && hotel.rooms.map((room) => (
          <div key={room._id}>
            <p>{room.title}</p>
            <img src={room.photos} alt={room.name} />
            <p>{room.price}</p>
            <button id={room._id} onClick={handleClick}>Book</button>
            <button id={room._id} onClick={handleDelete}>Delete Room</button>
            </div>
            ))}
      </div>
      
    </>
  )
}

export default HotelPage;