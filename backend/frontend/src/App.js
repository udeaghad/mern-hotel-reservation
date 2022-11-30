import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import HotelPage from './components/HotelPage.js';
import BookHotel from './components/BookHotel.js';
import SignInPage from "./components/SignInPage.js";
import SignUpPage from './components/SignUpPage.js';
import ReservationPage from './components/ReservationPage.js';
import CreateHotel from './components/CreateHotelPage.js';
import CreateRoom from './components/CreateRoomPage.js';


const App = ()=> {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelPage />} />
        <Route path="/bookhotel" element={<BookHotel />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/reservations' element={<ReservationPage />} />
        <Route path='/createhotel' element={<CreateHotel />} />
        <Route path='/createroom' element={<CreateRoom />} />        
      </Routes>
     
    </div>
  );
}

export default App;
