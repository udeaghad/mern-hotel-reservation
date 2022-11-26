import React, {useState} from "react";
import axios from "axios"


const CreateHotel = () => {

  const [body, setBody] = useState({
    name: "",
    desc: "",
    address: "",
    city: "",
    cheapest_price: ""
  })

  const [file, setFile] = useState({
    preview: "",
    photos: ""
  });

  const handlePhotos = (e) => {
    console.log(e.target.files);
    setFile({
      preview: URL.createObjectURL(e.target.files[0]),
      photos: e.target.files[0]
    });
}

  const [msg, setMsg] = useState("")

  const handleChange = e => {
    e.preventDefault()
    setBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    console.log(body)
    console.log(file.photos)
    const formData = new FormData()
    
    formData.append("name", body.name)
    formData.append("desc", body.desc)
    formData.append("address", body.address)
    formData.append("city", body.city)
    formData.append("cheapest_price", body.cheapest_price)
    formData.append("photos", file.photos)
    // formData.append("file", file.photos.name)  
    
    try {
      const res = await axios.post("http://localhost:5000/api/v1/hotels", formData, { withCredentials: true },
      {
        headers: { "Content-Type": "multipart/form-data" }
      } )
      const data = await res.data
      console.log(data)  
       setMsg(data.message)
    } catch (error) {
      console.error(error.message)    
      
    }  
    
  }

  return (
    <>
    <h1>Create Hotel</h1>
    {msg && <p>{msg}</p>}
    {file.preview && <img src={ file.preview } alt="preview" />}
    <form onSubmit={onSubmit}>
      <input type="text"  name="name" placeholder="Enter Hotel Name" onChange={handleChange}/>
      <input type="text" placeholder="Enter Hotel Address" name="address" onChange={handleChange}/>
      <input type="text" placeholder="Enter city" name="city"  onChange={handleChange}/>
      <input type="file" placeholder="Upload ohotos" name="photos" onChange={handlePhotos} />      
      <input type="number" placeholder="Enter cheapest price" name="cheapest_price"  onChange={handleChange}/>
      <input type="text-area" placeholder="Describe available facilities" name="desc"  onChange={handleChange}/>
      <button type="submit">Create new hotel</button>
    </form>

    </>
  )
}

export default CreateHotel;