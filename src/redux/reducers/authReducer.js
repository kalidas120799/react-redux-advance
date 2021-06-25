import { USERLOGIN, USERLOGOUT } from "../types/authType"

const initialState = {
    isLogin: false,
    userid: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERLOGIN: return {
            ...state,
            isLogin: true,
            userid: action.payload
        }
        case USERLOGOUT: return {
            ...state,
            isLogin: false,
            userid:null
        }
        default: return state
    }
}

export default authReducer