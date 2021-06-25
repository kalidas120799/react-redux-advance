import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addUserData,getAllUsers } from "../redux/actions/userActions"
export default function HookUserDatabase(props) {
    const [name, setname] = useState("")
    const allUsers = useSelector(state => state.userReducer.users)
    const adduser = useDispatch()          
    const addnewUser = () => {
        const User = {
            name: name,
            id: Date.now().toString()
        }
        const newUsers = [...allUsers, User]
        console.log(adduser(getAllUsers()));
        adduser(addUserData(newUsers))
    }
    return (
        <div>
            <h1>Hai From Hook</h1>
            <input type="text" name="name" value={name} onChange={e => setname(e.target.value)} />
            <button onClick={addnewUser} >Add User</button>
        </div>
    )
}
