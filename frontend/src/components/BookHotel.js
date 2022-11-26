import React, {useState}from "react";
import {useSelector} from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const BookHotel = () => {  

  const room = useSelector(state => state.room)
  let base64String = ""
  if(room){
    base64String = btoa(String.fromCharCode(...room.photos.data.data))
  }

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
    { room && <div> 
  <h1>Book hotel</h1>

  <p>{room.title}</p>
  <p>{room.price}</p>
  <p>{room.desc}</p>
  <img src={`data:image/png;base64,${base64String}`} alt={room.title} />
  <p>{room.maxPeople}</p>

  <form onSubmit={onSubmit}>
    <input type="date" name="date" placeholder="Choose date" onChange={(e) => setBookDate(e.target.value)}/>
    <button type="submit">Book</button>
  </form>
  </div>}
   </>
  )
}

export default BookHotel;