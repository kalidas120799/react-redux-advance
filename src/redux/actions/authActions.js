import { USERLOGIN, USERLOGOUT } from "../types/authType"

export const userLogin = (userid) => {
    return {
        type: USERLOGIN,
        payload: userid
    }
}

export const userLogout = () => {
    return {
        type: USERLOGOUT
    }
}