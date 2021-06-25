import React from 'react'
import { connect } from "react-redux"
import { userLogin, userLogout } from "../redux/actions/authActions"
function FunUserDatabase(props) {
    const { islogin, userid } = props
    
    const loginbtn = () => {
        const userid = Date.now().toString()
        props.newUserLogin(userid)
    }
    return (
        <div>
            <h4>Hai From Fun</h4>

            {
                islogin ? <div>Welcome {userid}</div> : <div>Please Login</div>
            }
            <button onClick={loginbtn}>Login</button>
            <button onClick={()=>props.logout()} >Logout</button>
        </div>
    )
}

const mapStateToProps = state => {
    const { authReducer } = state
    return {
        islogin: authReducer.isLogin,
        userid: authReducer.userid
    }
}
const mapDispatchToProps = dispatch => {

    return {
        newUserLogin: (userid) => dispatch(userLogin(userid)),
        logout: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FunUserDatabase)
