import { ALLUSERDATA, ADDUSERDATA } from "../types/userType"
import usersDB from "./database"
const initialState = {
    users: usersDB,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALLUSERDATA: return {
            ...state,
            users: state
        }
        case ADDUSERDATA: return {
            ...state,
            users: action.payload
        }
        default: return state
    }
}

export default userReducer