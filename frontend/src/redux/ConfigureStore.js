import { configureStore, combineReducers} from '@reduxjs/toolkit';
import {hotelsReducer, allHotelsReducer} from "./hotels/hotelsReducer.js"
import roomsReducer from "./rooms/roomsReducer.js";
import usersReducer from './auths/usersReducer.js';


const rootReducer = combineReducers({
    // Add reducers here
    hotel: hotelsReducer,
    room: roomsReducer,
    user: usersReducer, 
    allHotels: allHotelsReducer   
})

const store = configureStore({
    reducer: rootReducer
})

export default store