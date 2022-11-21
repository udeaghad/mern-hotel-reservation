import React, {useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

const CreateRoom = () => {
  const [body, setBody] = useState({
    title: "",
    desc: "",
    maxPeople: "",
    price: "",    
  })

  const [chooseHotel, setChooseHotel] = useState("")

  const handleSelect = (e) => {
    e.preventDefault()
    console.log(e.target.value)
      setChooseHotel(e.target.value)
  }

  const handleChange = (e) => {
    setBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const [file, setFile] = useState();

  const handlePhotos = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

  const [msg, setMsg] = useState("")

  const onSubmit = async(e) => {
    e.preventDefault()
    const newBody = {...body, photos: file}
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/rooms/${chooseHotel}`, newBody, { withCredentials: true } )
      const data = await res.data
      console.log(data)
      setMsg(data.message)
    } catch (error) {
      console.error(error.message)
    }
  }

  const allHotels = useSelector(state => state.allHotels)
  console.log(allHotels)
  return (
    <>
    <h1>Create Room</h1>
    {msg && <p>{msg}</p>}
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Enter Room Name" name="title" onChange={handleChange} />
      <input type="text" placeholder="Max Number per room" name="maxPeople" onChange={handleChange} />
      <input type="number" placeholder="Enter Room Price" name="price" onChange={handleChange} />
      <input type="text" placeholder="Enter Room Description" name="desc" onChange={handleChange} />
      <input type="file" placeholder="Upload Photos" name="photos" onChange={handlePhotos} />
      <select name="hotelID" onChange={handleSelect}>
        {allHotels.map((hotel) => (
          <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
        ))}
      </select>
      <button type="submit">Create new room</button>

    </form>
    </>
  )
}

export default CreateRoom;