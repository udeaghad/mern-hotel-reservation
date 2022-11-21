import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import getUser from "../redux/auths/usersAction";
import {useDispatch} from "react-redux";
import axios from "axios";

const SignInPage = ()=> {

  const [body, setBody] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    e.preventDefault(
      setBody((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    )
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async(e) => {
    e.preventDefault()
    console.log(body)

    try {
      await axios.post("http://localhost:5000/api/v1/auths/login", body, { withCredentials: true } )
      .then((res) => {
      const data = res.data
      console.log(data)
      dispatch(getUser(data))
      localStorage.setItem("user", JSON.stringify(data))
      })
      navigate("/")

    } catch (error) {
      console.error(error.message)
    }
    }

  return (
    <>
    <h1>Sign In</h1>
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="Enter your username" onChange={(e) => handleChange(e)}/>
      <input type="password" name="password" placeholder="Enter your password" onChange={(e) => handleChange(e)} />
      <button type="submit">Sign In</button>


    </form>
    </>
    
  )
}

export default SignInPage;