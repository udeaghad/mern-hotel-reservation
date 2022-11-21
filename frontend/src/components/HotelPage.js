import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import getRoom from "../redux/rooms/roomsAction";

const HotelPage = () => {

  const hotel = useSelector(state => state.hotel)
 console.log(hotel)
  const navigate = useNavigate();
  const dispatch = useDispatch();

 const handleClick = (e) => {
  e.preventDefault();  
  dispatch(getRoom(e.target.id))
  navigate("/bookhotel")
 }

  return (
    <>
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
            <button id={room._id} onClick={(e) => handleClick(e)}>Book</button>
            </div>
            ))}
      </div>
      
    </>
  )
}

export default HotelPage;