import React, {useState, useEffect} from "react";

const HomePage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))       
  }, [])
   
  return (
    <div>
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel._id}>
          <h1>{hotel.name}</h1>
          <p>Facilities: {hotel.desc}</p>
          <p>City: {hotel.city}</p>
          </div>
      ))}
    </div>
  )
}

export default HomePage;