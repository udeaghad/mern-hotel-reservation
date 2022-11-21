import { createAsyncThunk } from "@reduxjs/toolkit";

const GET_ROOM = "GET_ROOM";


const getRoom = createAsyncThunk(
  GET_ROOM, 
  async (room_id) => { 
    const response = await fetch(`http://localhost:5000/api/v1/rooms/${room_id}`);
    const data = await response.json();
    console.log(data);
    return data;
  });

  

export default getRoom;