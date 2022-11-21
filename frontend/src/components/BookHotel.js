import React, {useState}from "react";
import {useSelector} from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const BookHotel = () => {  

  const room = useSelector(state => state.room)
  console.log(room)

  const [bookDate, setBookDate] = useState()

  const hotel = useSelector(state => state.hotel)
  const user = useSelector(state => state.user)
  
  const navigate = useNavigate();

  const onSubmit = async(e) => {

    e.preventDefault()
    const body = {
      hotel: hotel._id,
      room: room._id,
      date: bookDate,
      user: user._id
    }
    

    try {
      await axios.post("http://localhost:5000/api/v1/reservations/", body, { withCredentials: true } )
      .then((res) => {   
        const data = res.data
        console.log(data)

      })
      navigate("/reservations")
    } catch (error) {
      console.error(error.message)
    }
    
  }

  return ( 
    <> 
  <h1>Book hotel</h1>
  <p>{room.title}</p>
  <p>{room.price}</p>
  <p>{room.desc}</p>
  <img src={room.photos} alt={room.name} />
  <p>{room.maxPeople}</p>

  <form onSubmit={onSubmit}>
    <input type="date" name="date" placeholder="Choose date" onChange={(e) => setBookDate(e.target.value)}/>
    <button type="submit">Book</button>
  </form>

   </>
  )
}

export default BookHotel;