import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import axios from "axios"



const ReservationPage = () => {
  const user = useSelector(state => state.user)

  
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/reservations/${user._id}`, { withCredentials: true })
    .then(res => {
      console.log(res.data)
      setReservations(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  
  const handleDelete = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    
     axios.delete(`http://localhost:5000/api/v1/reservations/${e.target.id}`, { withCredentials: true })
     
     
     
      setReservations(reservations.filter(reservation => reservation._id !== e.target.id))
    
  } 
 
 
  return(
    <>
    <h1>Reservation Page</h1>
   
    {reservations.map((reservation) => { 
      console.log(reservation)
      const room64String = btoa(String.fromCharCode(...reservation.room.photos.data.data))
      const hotel64String = btoa(String.fromCharCode(...reservation.hotel.photos.image.data.data))

     return ( 
      <div key={reservation._id}>
        <h1>Hotel</h1>
        <p>{reservation.date}</p>
        <img src={`data:image/png;base64,${hotel64String}`} alt={reservation.hotel.name} />
        <p>{reservation.hotel.name}</p>
        <p>{reservation.hotel.address}</p>
        <p>{reservation.hotel.city}</p>
        <h1>Room Booked</h1>
        <p>{reservation.room.title}</p>
        <p>{reservation.date}</p>
        <p>Person: {reservation.room.maxPeople}</p>
        <p>{reservation.room.price}</p>
        <img src={`data:image/png;base64,${room64String}`} alt={reservation.room.title} />
        <p>{reservation.room.desc}</p>
        <button id={reservation._id} type="button" onClick={handleDelete}>Delete</button>
      </div>
    )})}

    </>
  )
}

export default ReservationPage;