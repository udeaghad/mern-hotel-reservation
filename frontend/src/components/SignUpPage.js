import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {

  const [body, setBody] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    e.preventDefault()
    setBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const navigate = useNavigate();

  const onSubmit = async(e) => {
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:5000/api/v1/auths/register", body, { withCredentials: true } )
      const data = await res.data
      console.log(data)  
      navigate("/signin")  
    } catch (error) {
      console.error(error.message)    
      
    }
    
  }
  

  return (
    <> 
    <h1>Sign Up</h1>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Enter Your Username" name="username" onChange={handleChange} />
      <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />
      <input type="password" placeholder="Enter Your Password" name="password" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
    </>
  )
}

export default SignUpPage;