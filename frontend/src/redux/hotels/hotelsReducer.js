const hotel = {}

const hotelsReducer = (state = hotel, action) => {
    switch(action.type) {
        case "GET_HOTEL/fulfilled":
            return action.payload;
        case "DELETE_ROOM":
            return {...state, rooms: [...state.rooms.filter(room => room._id !== action.payload)]}
        default:
            return state
    }
}

const allHotels = []

const allHotelsReducer = (state = allHotels, action) => {
    switch(action.type) {
      case "GET_ALL_HOTELS/fulfilled":
        return action.payload
      case "DELETE_HOTEL":
          return [...state.filter(hotel => hotel._id !== action.payload)]
      default:
        return state
    }
}

export {hotelsReducer, allHotelsReducer};