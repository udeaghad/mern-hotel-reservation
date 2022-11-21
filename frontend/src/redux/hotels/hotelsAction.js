import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const GET_HOTEL = "GET_HOTEL"
const GET_ALL_HOTELS = "GET_ALL_HOTELS"
const DELETE_HOTEL = "DELETE_HOTEL"

const getHotels = createAsyncThunk(
  GET_HOTEL, 
  async (hotel_id) => {
    const response = await fetch(`http://localhost:5000/api/v1/hotels/${hotel_id}`)
    const data = await response.json()
    console.log(data)
    return data
  }
)

const getAllHotels = createAsyncThunk(
  GET_ALL_HOTELS,
  async () => {
    const res = await axios.get("http://localhost:5000/api/v1/hotels")
    const data = await res.data
    return data
  }
)

const deleteHotelAction = (payload) => ({
  type: DELETE_HOTEL,
  payload
})


export  {getHotels, getAllHotels, deleteHotelAction};