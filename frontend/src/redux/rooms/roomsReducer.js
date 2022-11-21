const room = {}

const roomsReducer = (state = room, action) => {
    switch(action.type) {
        case "GET_ROOM/fulfilled":
            return action.payload
        default:
            return state
    }
}

export default roomsReducer