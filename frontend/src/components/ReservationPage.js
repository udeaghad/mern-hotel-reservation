import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import axios from "axios"
// import getReservations from "../redux/reservations/reservationsAction";


const ReservationPage = () => {
  const user = useSelector(state => state.user)
  
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const getReservations = async() => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/reservations/${user._id}`, { withCredentials: true })
        const data = await res.data
        console.log(data)
        setReservations(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    getReservations()
  }, [user._id])   
 
 
  return(
    <>
    <h1>Reservation Page</h1>
    {reservations.map((reservation) => (
      <div key={reservation._id}>
        <p>{reservation.hotel.name}</p>
        <p>{reservation.hotel.address}</p>
        <p>{reservation.hotel.city}</p>
        <p>{reservation.room.title}</p>
        <p>{reservation.date}</p>
        <p>{reservation.room.maxPeope}</p>
        <p>{reservation.room.price}</p>
        <img src={reservation.room.photos} alt={reservation.room.title} />
        <p>{reservation.room.desc}</p>
      </div>
    ))}

    </>
  )
}

export default ReservationPage;