import { ALLUSERDATA, ADDUSERDATA } from "../types/userType"

export const getAllUsers = () => {
    return {
        type: ALLUSERDATA
    }
}

export const addUserData = (userdata) => {
    return {
        type: ADDUSERDATA,
        payload:userdata
    }
}